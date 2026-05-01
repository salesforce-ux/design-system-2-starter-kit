import { defineConfig } from 'vite';
import path from 'path';
import lwc from 'vite-plugin-lwc';
import {
  resolveIconTemplatesPlugin,
  iconTemplateExcludeDirs,
  iconTemplateAliases,
} from './vite-plugins/icon-templates.js';

/** LBC ships templates that trip many LWC diagnostics; app code cannot fix those. */
const LBC_UNDER_NODE_MODULES = /node_modules[/\\]lightning-base-components[/\\]/;

function isLightningBaseComponentsLwcRollupWarning(warning) {
  const locFile = warning.loc?.file ?? '';
  const id = warning.id ?? '';
  const message = warning.message ?? '';
  return (
    LBC_UNDER_NODE_MODULES.test(String(locFile)) ||
    LBC_UNDER_NODE_MODULES.test(String(id)) ||
    LBC_UNDER_NODE_MODULES.test(String(message))
  );
}

function suppressLbcLwcLoggerNoisePlugin() {
  return {
    name: 'suppress-lbc-lwc-logger-noise',
    configResolved(config) {
      const { logger } = config;
      const origWarn = logger.warn.bind(logger);
      logger.warn = (msg, options) => {
        if (LBC_UNDER_NODE_MODULES.test(String(msg))) return;
        origWarn(msg, options);
      };
      const origWarnOnce = logger.warnOnce.bind(logger);
      logger.warnOnce = (msg, options) => {
        if (LBC_UNDER_NODE_MODULES.test(String(msg))) return;
        origWarnOnce(msg, options);
      };
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [
    suppressLbcLwcLoggerNoisePlugin(),
    resolveIconTemplatesPlugin(),
    lwc({
      modules: [
        {
          dir: path.resolve('./src/modules'),
        },
        {
          name: '@salesforce/gate/bc.260.enableComboboxElementInternals',
          path: path.resolve('./src/build/shim/gateComboboxElementInternalsClosed.js'),
        },
        {
          npm: 'lightning-base-components',
        },
      ],
      disableSyntheticShadowSupport: false,
      enableDynamicComponents: true,
      exclude: [
        path.resolve('./index.html'),
        /loading\.css/,
        path.resolve('./src/build/generated'),
        // Global SLDS from node_modules (new URL in slds-loader.js) must not pass through LWC:
        // LWC rejects :root in this pipeline when synthetic shadow is enabled.
        /(salesforce-lightning-design-system\.min\.css|slds2\.cosmos\.css)(\?.*)?$/,
        // Global styles loaded via new URL() pattern must also bypass LWC plugin
        /\/styles\/global\.css(\?.*)?$/,
        ...iconTemplateExcludeDirs,
      ],
    }),
  ],
  build: {
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        if (isLightningBaseComponentsLwcRollupWarning(warning)) return;
        defaultHandler(warning);
      },
    },
  },
  appType: 'spa',
  server: {
    port: 3000,
    open: false,
  },
  optimizeDeps: {
    exclude: ['lightning/modal', 'lightning/toast', 'lightning/toastContainer', 'lightning/showToastEvent', 'lightning/primitiveOverlay', 'lightning/overlayUtils', 'lightning/modalBase', 'lightning/utilsPrivate'],
  },
  resolve: {
    alias: {
      '@salesforce-ux/design-system': path.resolve('./node_modules/@salesforce-ux/design-system'),
      '@salesforce-ux/design-system-2': path.resolve('./node_modules/@salesforce-ux/design-system-2'),
      ...iconTemplateAliases,
    },
  },
});
