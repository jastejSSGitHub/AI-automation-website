# 🚀 Deployment Guide - AI Automation Website

## ✅ What's Already Done

- ✅ Git installed and configured
- ✅ GitHub CLI installed
- ✅ Local Git repository initialized
- ✅ Initial commit created with all your files
- ✅ Ready to push to GitHub

---

## 📋 Next Steps (Quick & Easy!)

### Step 1: Authenticate with GitHub (One-Time Setup)

Open a **NEW PowerShell window** and run:

```powershell
gh auth login
```

**Follow the prompts:**
1. Choose: **GitHub.com**
2. Choose: **HTTPS**
3. Choose: **Login with a web browser**
4. Copy the code shown
5. Press Enter to open browser
6. Paste the code and authorize

### Step 2: Create GitHub Repository & Push

After authentication, run these commands in your website folder:

```powershell
cd "c:\Users\hp\Desktop\Anti-Gravity Research Folders\AI Automation\website"

# Create a private GitHub repository
gh repo create ai-automation-website --private --source=. --remote=origin --push
```

That's it! Your code is now on GitHub! 🎉

---

## 🌐 Step 3: Deploy to Vercel

### Option A: Automatic Setup (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. Click **"Import Project"**
5. Find and select **"ai-automation-website"**
6. Click **"Deploy"** (Vercel auto-detects Next.js settings)
7. Wait 1-2 minutes ✨

**Your site is live!** Vercel will give you a URL like: `https://ai-automation-website.vercel.app`

### Option B: Using Vercel CLI

```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts and link to your GitHub repo
```

---

## 🔄 Your Daily Workflow (After Setup)

Whenever you make changes to your website:

```powershell
# 1. Make your edits to index.html or other files

# 2. Commit and push
git add .
git commit -m "Description of your changes"
git push

# 3. Vercel automatically deploys! (1-2 minutes)
```

**That's it!** Your changes will automatically appear on your live site.

---

## 🖼️ Fixing Image Paths

Your images need to be in the `public/` folder and referenced correctly:

### Current Setup:
- Images in: `public/` folder ✅
- Reference as: `/image-name.png` (not `./public/image-name.png`)

### Example:
```html
<!-- ❌ Wrong -->
<img src="./public/globe.svg" />
<img src="file:///C:/Users/..." />

<!-- ✅ Correct -->
<img src="/globe.svg" />
<img src="/thunder-3d-icon-new.png" />
```

---

## 🎯 Quick Reference

### Check Git Status
```powershell
git status
```

### View Your GitHub Repo
```powershell
gh repo view --web
```

### View Deployment Status
Go to your Vercel dashboard: [vercel.com/dashboard](https://vercel.com/dashboard)

---

## 🆘 Troubleshooting

### "gh: command not found"
Close and reopen PowerShell, then try again.

### "Permission denied"
Run `gh auth login` again to re-authenticate.

### Images not showing on deployed site
1. Make sure images are in `public/` folder
2. Use `/image.png` paths (not `./public/image.png`)
3. Check browser console for 404 errors

---

## 📝 Notes

- **Repository Name**: `ai-automation-website`
- **Branch**: `main`
- **Deployment**: Automatic via Vercel
- **Build Command**: `npm run build` (handled by Vercel)
- **Output Directory**: `.next` (handled by Vercel)

---

**Need help?** Just ask! I'm here to assist. 🚀
