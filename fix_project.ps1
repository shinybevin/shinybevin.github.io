# FIX & DEPLOY SCRIPT

Write-Host "1. Fixing Git Configuration..." -ForegroundColor Cyan
# Remove node_modules from git tracking if they exist in the index
git rm -r --cached node_modules 2>$null
git add .gitignore
git commit -m "fix: stop tracking node_modules" 2>$null

Write-Host "2. Building Project..." -ForegroundColor Cyan
npm run build

if (-not (Test-Path "dist")) {
    Write-Error "Build Failed! 'dist' folder missing."
    exit
}

Write-Host "3. Deploying to GitHub Pages..." -ForegroundColor Cyan
$RemoteUrl = "https://github.com/shinybevin/shinybevin.github.io.git"

# Deploy logic
Push-Location dist
git init -b main
git add -A
git commit -m "deploy: $(Get-Date)"
$pushOutput = git push -f $RemoteUrl main:gh-pages 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Error "Deploy Failed!"
    Write-Host $pushOutput -ForegroundColor Red
}
else {
    Write-Host "SUCCESS! Deployment Complete." -ForegroundColor Green
    Write-Host "---------------------------------------------------"
    Write-Host "CRITICAL FINAL STEP:" -ForegroundColor Yellow
    Write-Host "1. Go to https://github.com/shinybevin/shinybevin.github.io/settings/pages" -ForegroundColor Yellow
    Write-Host "2. Under 'Branch', select 'gh-pages' and save." -ForegroundColor Yellow
    Write-Host "3. Wait 1 minute and visit https://shinybevin.github.io" -ForegroundColor Yellow
    Write-Host "---------------------------------------------------"
}
Pop-Location

Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
