---
name: repo-setup
version: "1.0.0"
description: "Set up a GitHub repo for this project on git.soma.salesforce.com. Covers prerequisites (brew, gh CLI, auth), repo creation, and initial push. Use when the user needs a remote repo, asks about pushing code, or before first-time-deploy."
---

# Repo Setup

Set up a remote GitHub repository for this project. The primary host is **git.soma.salesforce.com**. Users on GitHub EMU or personal github.com accounts can select **GitHub.com** instead of **Other** during `gh auth login`.

## Tone

**Important:** The user may not be technical. Always use the correct technical term but immediately follow it with a plain-language explanation in parentheses, e.g. "commit your changes (save a snapshot of your work)" or "push your code (send your latest changes to GitHub so others can see them)". Do this every time, not just the first mention.

## Steps

### 1. Ensure Homebrew is installed

```bash
which brew
```

If missing, install it (this may take a minute):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Ensure `gh` CLI is installed

```bash
which gh
```

If missing:

```bash
brew install gh
```

### 3. Authenticate with GitHub

Check whether the user is already authenticated:

```bash
gh auth status --hostname git.soma.salesforce.com
```

If not authenticated, walk the user through `gh auth login`:

```bash
gh auth login
```

When prompted:
1. **Where do you use GitHub?** Select **Other**
2. **Hostname** Enter `git.soma.salesforce.com`
3. Follow the remaining browser/token prompts

> For GitHub EMU or github.com, select **GitHub.com** instead of **Other** in step 1.

### 4. Check for an existing remote repo

```bash
git remote get-url origin
```

If `origin` is set, verify the repo is reachable:

```bash
gh repo view --json name --hostname git.soma.salesforce.com
```

If `origin` is not set or the repo does not exist, tell the user no remote repository was found and ask if they'd like to create one.

### 5. Create a repo (if needed)

Use the current directory name as the default repo name. If it is still `design-system-2-starter-kit`, ask the user what they want to name the project instead. Confirm the name with the user before proceeding.

```bash
gh repo create <repo-name> --internal --source=. --hostname git.soma.salesforce.com
```

This creates the repo under the user's personal account with **internal** visibility (accessible to org members). If the user specifically asks to create it under an org, use `<org>/<repo-name>` instead.

### 6. Commit and push

Check for uncommitted changes:

```bash
git status
```

If there are staged or unstaged changes, help the user commit them (add the files, write a commit message, and commit).

Then push to the remote. This uploads the project to the repository so others can access it:

```bash
git push -u origin main
```

Ask the user before pushing. If the default branch is not `main`, use whatever branch is current.

### 7. Confirm

Tell the user the repo is set up and their code has been pushed. Provide the repo URL:

```bash
gh repo view --json url --hostname git.soma.salesforce.com --jq '.url'
```
