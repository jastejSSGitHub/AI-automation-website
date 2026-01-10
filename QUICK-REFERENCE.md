# 🎯 Quick Reference - Daily Workflow

## After Making Changes to Your Website

```powershell
# Navigate to your website folder
cd "c:\Users\hp\Desktop\Anti-Gravity Research Folders\AI Automation\website"

# Add all changes
git add .

# Commit with a message
git commit -m "Updated hero section with new images"

# Push to GitHub (triggers automatic deployment)
git push
```

**That's it!** Vercel will automatically deploy your changes in 1-2 minutes.

---

## 📝 Common Commit Messages

```powershell
git commit -m "Added new solution section"
git commit -m "Updated pricing information"
git commit -m "Fixed navigation menu"
git commit -m "Added new images to hero section"
git commit -m "Updated contact form"
git commit -m "Improved mobile responsiveness"
```

---

## 🔍 Useful Commands

### Check what files changed
```powershell
git status
```

### View your commit history
```powershell
git log --oneline -10
```

### View your GitHub repository in browser
```powershell
gh repo view --web
```

### Check deployment status
Go to: https://vercel.com/dashboard

---

## 🖼️ Adding New Images

1. Put image in `public/` folder
2. Reference in HTML as `/image-name.png`
3. Commit and push as usual

Example:
```html
<img src="/my-new-image.png" alt="Description" />
```

---

## 🆘 Quick Fixes

### Forgot to add files?
```powershell
git add .
git commit --amend --no-edit
git push --force
```

### Want to undo last commit? (keeps changes)
```powershell
git reset --soft HEAD~1
```

### See what changed in a file?
```powershell
git diff index.html
```

---

**Remember**: Every `git push` automatically deploys to your live site! 🚀
