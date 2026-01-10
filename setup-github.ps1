# GitHub Setup Script for AI Automation Website
# Run this in PowerShell

Write-Host "AI Automation Website - GitHub Setup" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Navigate to website directory
Set-Location "c:\Users\hp\Desktop\Anti-Gravity Research Folders\AI Automation\website"

# Step 1: Check GitHub CLI
Write-Host "Step 1: Checking GitHub CLI..." -ForegroundColor Yellow
try {
    $ghVersion = gh --version
    Write-Host "GitHub CLI is installed" -ForegroundColor Green
}
catch {
    Write-Host "GitHub CLI not found. Please close and reopen PowerShell." -ForegroundColor Red
    exit 1
}

# Step 2: Authenticate with GitHub
Write-Host ""
Write-Host "Step 2: Authenticating with GitHub..." -ForegroundColor Yellow
$authStatus = gh auth status 2>&1
if ($authStatus -match "Logged in") {
    Write-Host "Already authenticated with GitHub!" -ForegroundColor Green
}
else {
    Write-Host "Please authenticate with GitHub..." -ForegroundColor Cyan
    gh auth login
}

# Step 3: Create GitHub repository and push
Write-Host ""
Write-Host "Step 3: Creating GitHub repository..." -ForegroundColor Yellow
Write-Host "This will create a PRIVATE repository called 'ai-automation-website'" -ForegroundColor Cyan
Write-Host ""

$confirm = Read-Host "Continue? (Y/N)"
if ($confirm -eq "Y" -or $confirm -eq "y") {
    gh repo create ai-automation-website --private --source=. --remote=origin --push
    
    Write-Host ""
    Write-Host "SUCCESS! Your code is now on GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Go to https://vercel.com" -ForegroundColor White
    Write-Host "2. Sign up with GitHub" -ForegroundColor White
    Write-Host "3. Import your 'ai-automation-website' repository" -ForegroundColor White
    Write-Host "4. Click Deploy!" -ForegroundColor White
    Write-Host ""
    Write-Host "Your site will be live in 1-2 minutes!" -ForegroundColor Green
}
else {
    Write-Host "Setup cancelled." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')
