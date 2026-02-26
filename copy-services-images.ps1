# copy-services-images.ps1
# Copy local "images - services carousel" folder into this project's public folder
# Usage: Right-click -> Run with PowerShell, or run in terminal:
#   .\copy-services-images.ps1

$source = "C:\Users\jaste\Desktop\Antigravity research folders\AI Automation\Loopsuit AI\images - services carousel"
$dest = Join-Path -Path (Get-Location) -ChildPath "public\image - services carousel"

Write-Host "Source: $source" -ForegroundColor Cyan
Write-Host "Destination: $dest" -ForegroundColor Cyan

if (-Not (Test-Path $source)) {
    Write-Host "ERROR: Source folder not found. Please update the path at the top of this script to match your images folder." -ForegroundColor Red
    exit 1
}

if (-Not (Test-Path $dest)) {
    Write-Host "Creating destination folder..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $dest -Force | Out-Null
}

Write-Host "Copying files..." -ForegroundColor Yellow
Get-ChildItem -Path $source -File | ForEach-Object {
    $target = Join-Path $dest $_.Name
    Copy-Item -Path $_.FullName -Destination $target -Force
    Write-Host "  Copied: $($_.Name)" -ForegroundColor Green
}

Write-Host "\nFinished copying. Verify images in public\image - services carousel and reload the site." -ForegroundColor Cyan
Write-Host "If your folder path differs, edit this script and update the `$source` variable." -ForegroundColor White

pause
