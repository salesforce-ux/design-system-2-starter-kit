---
name: repo-setup
version: "1.0.0"
description: "Set up a GitHub repo for this project. Detects the GitHub host from the origin remote, covers prerequisites (brew, gh CLI, auth), repo creation, and initial push. Use when the user needs a remote repo, asks about pushing code, or before first-time-deploy."
---

# Repo Setup

Set up a remote GitHub repository for this project.

## Tone

**Important:** The user may not be technical. Always use the correct technical term but immediately follow it with a plain-language explanation in parentheses, e.g. "commit your changes (save a snapshot of your work)" or "push your code (send your latest changes to GitHub so others can see them)". Do this every time, not just the first mention.

## Steps

### 1. Ensure this is a git repo

```bash
git rev-parse --git-dir
```

If this is not a git repository (e.g. the user downloaded a zip), initialize one and create an initial commit:

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Detect the GitHub host

Check the existing `origin` remote to determine which GitHub host this project uses:

```bash
git remote get-url origin
```

Extract the hostname from the URL (e.g. `github.com`, or a GitHub Enterprise hostname). Use this as `<hostname>` throughout the remaining steps.

If `origin` points to the template repo (`salesforce-ux/design-system-2-starter-kit`), extract the hostname from it but do not treat it as the user's own repo. The user will still need a new repo created in step 7.

If `origin` is not set at all (e.g. freshly initialized from a zip), ask the user which GitHub host they use.

### 3. Ensure Homebrew is installed

```bash
which brew
```

If missing, install it (this may take a minute):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 4. Ensure `gh` CLI is installed

```bash
which gh
```

If missing:

```bash
brew install gh
```

### 5. Authenticate with GitHub

Check whether the user is already authenticated with `<hostname>`:

```bash
gh auth status --hostname <hostname>
```

If not authenticated, walk the user through `gh auth login`:

```bash
gh auth login
```

When prompted:
1. **Where do you use GitHub?** If `<hostname>` is `github.com`, select **GitHub.com**. Otherwise, select **Other** and enter the hostname.
2. Follow the remaining browser/token prompts.

### 6. Check for an existing remote repo

If `origin` is set and is not the template repo (from step 2), verify the repo is reachable:

```bash
gh repo view --json name --hostname <hostname>
```

If `origin` is not set or the repo does not exist, tell the user no remote repository was found and ask if they'd like to create one.

### 7. Create a repo (if needed)

Use the current directory name as the default repo name. If it is still `design-system-2-starter-kit`, ask the user what they want to name the project instead. Confirm the name with the user before proceeding.

```bash
gh repo create <repo-name> --internal --source=. --hostname <hostname>
```

This creates the repo under the user's personal account with **internal** visibility (accessible to org members). Do not ask about organizations.

### 8. Commit and push

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

### 9. Confirm

Tell the user the repo is set up and their code has been pushed. Provide the repo URL:

```bash
gh repo view --json url --hostname <hostname> --jq '.url'
```
