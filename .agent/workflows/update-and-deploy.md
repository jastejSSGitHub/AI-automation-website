---
description: Update website and deploy to production
---

# Update and Deploy Workflow

## How It Works

When the user says "update" or requests changes to the website, follow these steps:

### Step 1: Make the Changes
- Edit the requested files (usually `index.html` or component files)
- Make the exact changes the user requested in plain language

### Step 2: Commit and Push
// turbo-all
Run these commands automatically:

```bash
git add .
git commit -m "[Description of changes made]"
git push
```

### Step 3: Confirm Deployment
- Tell the user the changes are live
- Vercel will automatically deploy in 1-2 minutes
- Provide the deployment URL: https://ai-automation-website.vercel.app

## Example User Requests

**User says:** "Change the hero title to 'Launch in 1 Week'"
**You do:**
1. Edit `index.html` - update the hero section title
2. Run: `git add . && git commit -m "Updated hero title to 'Launch in 1 Week'" && git push`
3. Confirm: "✅ Updated! Changes will be live in 1-2 minutes at your Vercel URL"

**User says:** "Add a new pricing tier for $299/month"
**You do:**
1. Edit the pricing section in `index.html`
2. Add the new tier with all details
3. Run: `git add . && git commit -m "Added $299/month pricing tier" && git push`
4. Confirm deployment

**User says:** "Fix the mobile menu"
**You do:**
1. Identify and fix the mobile menu issue
2. Run: `git add . && git commit -m "Fixed mobile menu navigation" && git push`
3. Confirm deployment

## Important Notes

- Always use clear, descriptive commit messages
- Auto-run the git commands (marked with // turbo-all)
- Confirm with the user after pushing
- The user should NEVER need to run commands themselves
- Changes go live automatically via Vercel in 1-2 minutes

## Repository Info

- **GitHub:** https://github.com/jastejSSGitHub/AI-automation-website
- **Vercel:** https://ai-automation-website.vercel.app (or custom domain)
- **Main File:** `index.html`
- **Branch:** `main`
