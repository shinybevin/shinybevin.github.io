# Windows Deployment Script to bypass 'ENAMETOOLONG' error

# 1. Build the project
Write-Host "Building project..." -ForegroundColor Cyan
npm run build

if (-not (Test-Path "dist")) {
    Write-Error "Build failed. 'dist' folder not found."
    exit
}

# 2. Navigate to build folder
Push-Location dist

# 3. Initialize temporary git repo
Write-Host "Initializing temporary git repo..." -ForegroundColor Cyan
git init -b main
git add -A
git commit -m "deploy: $(Get-Date)"

# 4. Push to gh-pages branch
# We assume the remote is 'origin' of the parent setup, but since we are in a fresh init, we need the URL.
# 4. Push to gh-pages branch
$RemoteUrl = "https://github.com/shinybevin/shinybevin.github.io.git"

Write-Host "Pushing to $RemoteUrl (gh-pages branch)..." -ForegroundColor Cyan
$pushOutput = git push -f $RemoteUrl main:gh-pages 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Error "Push Failed!"
    Write-Host $pushOutput -ForegroundColor Red
    Write-Host "Possible causes:" -ForegroundColor Yellow
    Write-Host "1. You are not logged in to Git." -ForegroundColor Yellow
    Write-Host "2. The repository URL is incorrect." -ForegroundColor Yellow
    Write-Host "3. You don't have permission to write to the repository." -ForegroundColor Yellow
}
else {
    Write-Host "Deployment Complete! Check https://shinybevin.github.io" -ForegroundColor Green
    Write-Host "NOTE: Go to GitHub Settings -> Pages and select 'gh-pages' branch now." -ForegroundColor Cyan
}

# 5. Cleanup
Pop-Location

Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
