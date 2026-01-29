# Emergency Image Restoration Script
# Right-click this file and select "Run with PowerShell"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  🔧 LoopSuit Image Recovery Tool" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Navigate to project directory
$projectPath = "c:\Users\jaste\Desktop\Antigravity research folders\AI Automation\website"
Write-Host "📁 Navigating to project..." -ForegroundColor Yellow
Set-Location $projectPath

# Restore images from Git
Write-Host "🔄 Restoring images from Git commit 9e47f94..." -ForegroundColor Yellow
git checkout 9e47f94 -- public/Images/

# Verify restoration
Write-Host ""
Write-Host "✅ Verifying restoration..." -ForegroundColor Green

$caseStudyCount = (Get-ChildItem public\Images\CaseStudies -File -ErrorAction SilentlyContinue).Count
$solutionsCount = (Get-ChildItem public\Images\Solutions -File -ErrorAction SilentlyContinue).Count
$mainImagesCount = (Get-ChildItem public\Images -File -ErrorAction SilentlyContinue).Count

Write-Host ""
Write-Host "📊 Restoration Summary:" -ForegroundColor Cyan
Write-Host "   ✓ Case Study Images: $caseStudyCount files" -ForegroundColor Green
Write-Host "   ✓ Solution Images: $solutionsCount files" -ForegroundColor Green
Write-Host "   ✓ Main Images: $mainImagesCount files" -ForegroundColor Green

# Verify key images
Write-Host ""
Write-Host "🔍 Checking key images..." -ForegroundColor Yellow

$calenderSize = (Get-Item public\Images\Solutions\calender.png -ErrorAction SilentlyContinue).Length
if ($calenderSize -gt 1000000) {
    Write-Host "   ✓ calender.png: $([math]::Round($calenderSize/1KB, 0)) KB (HIGH QUALITY ✅)" -ForegroundColor Green
} else {
    Write-Host "   ⚠ calender.png: $([math]::Round($calenderSize/1KB, 0)) KB (might be wrong)" -ForegroundColor Yellow
}

$orbitSize = (Get-Item public\Images\ai_process_orbit.png -ErrorAction SilentlyContinue).Length
if ($orbitSize -gt 400000 -and $orbitSize -lt 500000) {
    Write-Host "   ✓ ai_process_orbit.png: $([math]::Round($orbitSize/1KB, 0)) KB (CORRECT ✅)" -ForegroundColor Green
} else {
    Write-Host "   ⚠ ai_process_orbit.png: $([math]::Round($orbitSize/1KB, 0)) KB (might be wrong)" -ForegroundColor Yellow
}

# Check if dev server is running
Write-Host ""
Write-Host "🌐 Checking dev server..." -ForegroundColor Yellow
$nodeProcess = Get-Process -Name node -ErrorAction SilentlyContinue
if ($nodeProcess) {
    Write-Host "   ✓ Dev server is RUNNING" -ForegroundColor Green
    Write-Host "   → Open: http://localhost:3001" -ForegroundColor Cyan
} else {
    Write-Host "   ⚠ Dev server is NOT running" -ForegroundColor Yellow
    Write-Host "   → Run: npx next dev -p 3001" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  🎉 Image Restoration Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Refresh your browser (Ctrl + Shift + R)" -ForegroundColor White
Write-Host "2. Verify all images are loading correctly" -ForegroundColor White
Write-Host "3. If dev server isn't running, start it with: npx next dev -p 3001" -ForegroundColor White
Write-Host ""

# Keep window open
Write-Host "Press any key to close..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
