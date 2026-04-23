---
name: first-time-deploy
version: "1.0.0"
description: "Publish this project to GitHub Pages. For repeat deploys, just run `npm run deploy`. This skill covers first-time setup: configuring Pages and running the initial deploy. Use when the user asks about deploying, publishing, sharing a link with a PM or stakeholder, or setting up GitHub Pages."
---

# Deploy to GitHub Pages

For **repeat deploys**, run **`npm run deploy`**. That's it.

The steps below cover **first-time setup**: ensuring a repo exists, deploying, and configuring GitHub Pages.

## Tone

**Important:** The user may not be technical. Always use the correct technical term but immediately follow it with a plain-language explanation in parentheses, e.g. "deploy your site (build and publish it so others can visit the link)" or "configure Pages (tell GitHub which branch to serve as a website)". Do this every time, not just the first mention.

## Prerequisites

Run the **repo-setup** skill first (`.agent/skills/repo-setup/SKILL.md`). It handles brew, `gh` CLI, authentication, repo creation, and initial push. It also detects the GitHub `<hostname>` from the `origin` remote. Use that same `<hostname>` throughout the steps below.

## Steps

### 1. Deploy (creates `gh-pages` branch)

Run the project's deploy script. This builds the site with hash routing and pushes `dist/` to the `gh-pages` branch:

```bash
npm run deploy
```

This must happen **before** configuring Pages settings, because the `gh-pages` branch must exist first.

### 2. Configure GitHub Pages on the repo

After `gh-pages` exists on the remote, configure the repo:

```bash
gh api repos/{owner}/{repo}/pages \
  --hostname <hostname> \
  --method POST \
  --field source='{"branch":"gh-pages","path":"/"}' \
  --silent 2>/dev/null \
  || gh api repos/{owner}/{repo}/pages \
     --hostname <hostname> \
     --method PUT \
     --field source='{"branch":"gh-pages","path":"/"}'
```

The `POST` creates the Pages config; if it already exists the `PUT` updates it.

Verify:

```bash
gh api repos/{owner}/{repo}/pages --hostname <hostname> --jq '.source'
```

Expected: `{ "branch": "gh-pages", "path": "/" }`.

### 3. Get the deployed URL

```bash
gh api repos/{owner}/{repo}/pages --hostname <hostname> --jq '.html_url'
```

Share the URL with the user. If the API does not return a URL (Pages may still be provisioning), tell the user they can find it under **Settings > Pages** on the repo.
