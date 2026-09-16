import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { test } from 'node:test';
import assert from 'node:assert/strict';

// Run the actual router in both Vite modes without adding a test framework.
async function setup(hash, initial = '/console', saved = 'standard') {
  let url = new URL(hash ? `https://example.test/kit/#${initial}` : `https://example.test${initial}`);
  const entries = [url.href];
  const events = new Map();
  const storage = new Map([['shell-current-app', saved]]);
  const context = vm.createContext({
    console,
    document: { title: '' },
    localStorage: { getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value) },
    window: {
      get location() { return url; },
      addEventListener: (name, callback) => events.set(name, callback),
    },
    history: {
      pushState: (_state, _title, path) => { url = new URL(path, url); entries.push(url.href); },
      replaceState: (_state, _title, path) => { url = new URL(path, url); entries[entries.length - 1] = url.href; },
    },
  });
  const modules = new Map();
  async function load(file) {
    if (modules.has(file)) return modules.get(file);
    const module = new vm.SourceTextModule(await readFile(new URL(file), 'utf8'), {
      context, identifier: file,
      initializeImportMeta: meta => { meta.env = { VITE_ROUTER_MODE: hash ? 'hash' : '' }; },
    });
    modules.set(file, module);
    await module.link((specifier, parent) => load(new URL(specifier, parent.identifier).href));
    return module;
  }
  const module = await load(new URL('../src/router.js', import.meta.url).href);
  await module.evaluate();
  return { router: module.namespace, entries, context,
    path: () => hash ? url.hash.slice(1) : url.pathname + url.search,
    visit: path => { url = new URL(hash ? `#${path}` : path, url); events.get('popstate')(); },
  };
}

for (const hash of [false, true]) {
  const mode = hash ? 'hash' : 'path';
  test(`${mode}: URL owns navigation, duplicate visits and replacement`, async () => {
    const { router, entries, path } = await setup(hash);
    router.subscribe(() => {});
    assert.equal(router.linkHref('/contacts'), hash ? '#/console/contacts' : '/console/contacts');
    router.navigate('/contacts');
    assert.equal(path(), '/console/contacts');
    router.navigate('/contacts');
    assert.equal(entries.length, 2);
    router.navigate('/icons', { replace: true });
    assert.equal(entries.length, 2);
    assert.equal(path(), '/console/icons');
  });
  test(`${mode}: only root redirects using saved preference`, async () => {
    const root = await setup(hash, '/', 'console');
    root.router.subscribe(() => {});
    assert.equal(root.path(), '/console');
    assert.equal(root.entries.length, 1);
    const unknown = await setup(hash, '/typo', 'console');
    let route;
    unknown.router.subscribe(value => { route = value; });
    assert.equal(unknown.path(), '/typo');
    assert.equal(route.notFound, true);
    assert.equal(route.app, null);
  });
  test(`${mode}: missing pages retain app and title, including history visits`, async () => {
    const state = await setup(hash, '/console/missing');
    let route;
    state.router.subscribe(value => { route = value; });
    assert.equal(route.app, 'console');
    assert.equal(route.notFound, true);
    assert.equal(state.context.document.title, 'Page Not Found');
    state.visit('/builder/missing');
    assert.equal(route.app, 'builder');
    assert.equal(route.component, null);
    state.visit('/console/contacts/42');
    assert.equal(route.params.id, '42');
    assert.equal(state.context.document.title, 'Contact 42');
  });
  test(`${mode}: query remains in the address without changing the page match`, async () => {
    const state = await setup(hash, '/console/contacts?search=A');
    assert.equal(state.router.getCurrentRoute().component, 'page-contacts');
    state.router.navigate('/contacts?search=B');
    assert.equal(state.path(), '/console/contacts?search=B');
  });
}

test('links preserve browser gestures and reject external navigation', async () => {
  const { router } = await setup(false);
  const event = { button: 0, currentTarget: {} };
  assert.equal(router.shouldHandleLink(event), true);
  for (const key of ['metaKey', 'ctrlKey', 'shiftKey', 'altKey', 'defaultPrevented']) {
    assert.equal(router.shouldHandleLink({ ...event, [key]: true }), false);
  }
  assert.equal(router.shouldHandleLink({ ...event, button: 1 }), false);
  assert.equal(router.shouldHandleLink({ ...event, currentTarget: { target: '_blank' } }), false);
  assert.equal(router.shouldHandleLink({ ...event, currentTarget: { hasAttribute: () => true } }), false);
  for (const path of ['https://example.test', '//example.test', '/\\example.test']) {
    assert.throws(() => router.navigate(path));
  }
});

for (const hash of [false, true]) {
  test(`root query is preserved (${hash ? 'hash' : 'path'})`, async () => {
    const state = await setup(hash, '/?campaign=x', 'console');
    state.router.subscribe(() => {});
    assert.equal(state.path(), '/console?campaign=x');
    assert.equal(state.entries.length, 1);
  });
}

test('malformed incoming hashes show Not Found on load and history navigation', async () => {
  for (const address of ['//console/contacts', 'https://example.test', '/\\example.test']) {
    const state = await setup(true, address);
    let route;
    state.router.subscribe(value => { route = value; });
    assert.equal(route.notFound, true);
    state.visit('/console');
    state.visit(address);
    assert.equal(route.notFound, true);
  }
});
