/**
 * Copies selected Agentforce Verifier (afv-library) skills into `.agent/skills/afv-library/`.
 * Other skill folders under `.agent/skills/` are tracked in git. See AGENTS.md.
 *
 * Invoked via `npm run skills:sync` and from `postinstall`.
 *
 * Requires: git on PATH, network access to GitHub.
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
/** Synced vendor skills only; do not commit this tree (see .gitignore). */
const DEST_BASE = path.join(REPO_ROOT, '.agent', 'skills', 'afv-library');

const REPO_URL = 'https://github.com/forcedotcom/afv-library.git';
const BRANCH = 'develop';
const SKILL_NAMES = [
    'applying-slds',
    'uplifting-components-to-slds2',
    'validating-slds',
];

function runGit(args) {
    const result = spawnSync('git', args, { stdio: ['ignore', 'pipe', 'pipe'] });
    if (result.error) {
        throw result.error;
    }
    if (result.status !== 0) {
        const stderr = result.stderr?.toString().trim();
        if (stderr) console.error(stderr);
        process.exit(result.status ?? 1);
    }
}

const tmpBase = fs.mkdtempSync(path.join(os.tmpdir(), 'afv-skills-'));
const cloneDir = path.join(tmpBase, 'repo');

try {
    console.log('sync-afv-skills: fetching skills from afv-library…');
    runGit(['clone', '--depth', '1', '--branch', BRANCH, REPO_URL, cloneDir]);

    const skillsRoot = path.join(cloneDir, 'skills');
    if (!fs.existsSync(skillsRoot)) {
        console.error(`sync-afv-skills: expected directory missing: ${skillsRoot}`);
        process.exit(1);
    }

    fs.mkdirSync(DEST_BASE, { recursive: true });

    for (const name of SKILL_NAMES) {
        const src = path.join(skillsRoot, name);
        if (!fs.existsSync(src)) {
            console.error(`sync-afv-skills: skill folder missing: ${src}`);
            process.exit(1);
        }
        const dest = path.join(DEST_BASE, name);
        fs.rmSync(dest, { recursive: true, force: true });
        fs.cpSync(src, dest, { recursive: true });
    }

    console.log(`sync-afv-skills: copied ${SKILL_NAMES.length} skills to ${DEST_BASE}`);
} finally {
    fs.rmSync(tmpBase, { recursive: true, force: true });
}
