$ErrorActionPreference = 'Stop'

$sourceRepo = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$githubRepo = [System.IO.Path]::GetFullPath((Join-Path $sourceRepo '..\..'))
$publishRoot = [System.IO.Path]::GetFullPath((Join-Path $githubRepo 'projects\civil-war-field-companion'))
$buildRoot = [System.IO.Path]::GetFullPath((Join-Path $sourceRepo 'dist\client'))

if (-not (Test-Path -LiteralPath (Join-Path $githubRepo '.git'))) {
  throw "GitHub Pages repository was not found at $githubRepo"
}

$expectedSource = [System.IO.Path]::GetFullPath((Join-Path $githubRepo 'apps\civil-war-field-companion'))
if ($sourceRepo -ne $expectedSource) {
  throw "Expected source app at $expectedSource"
}

$trackedTranscripts = @(git -C $githubRepo ls-files -- 'apps/civil-war-field-companion/data/transcripts')
if ($LASTEXITCODE -ne 0 -or $trackedTranscripts.Count -gt 0) {
  throw 'Episode transcripts must remain local and untracked before publishing.'
}

if (@(git -C $githubRepo diff --cached --name-only).Count -gt 0) {
  throw 'Commit or unstage pending changes before publishing generated pages.'
}

if (-not $publishRoot.StartsWith($githubRepo + [System.IO.Path]::DirectorySeparatorChar, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Refusing to publish outside the GitHub Pages repository: $publishRoot"
}

Push-Location -LiteralPath $sourceRepo
try {
  & (Join-Path $sourceRepo 'node_modules\.bin\vinext.cmd') build
  if ($LASTEXITCODE -ne 0) { throw 'Static site build failed.' }
} finally {
  Pop-Location
}

if (-not (Test-Path -LiteralPath (Join-Path $buildRoot 'index.html'))) {
  throw "Static build output was not found at $buildRoot"
}

if (@(Get-ChildItem -LiteralPath $buildRoot -Directory -Recurse | Where-Object { $_.Name -eq 'transcripts' }).Count -gt 0) {
  throw 'Refusing to publish an export containing a transcripts directory.'
}

if (-not (Test-Path -LiteralPath $publishRoot)) {
  New-Item -ItemType Directory -Path $publishRoot | Out-Null
} else {
  Get-ChildItem -LiteralPath $publishRoot -Force | Remove-Item -Recurse -Force
}

Copy-Item -Path (Join-Path $buildRoot '*') -Destination $publishRoot -Recurse -Force

# Vinext writes assetPrefix files beneath the prefix path. The GitHub project
# directory already represents that prefix, so flatten only the generated
# _next directory into the project root.
$prefixedAssetRoot = Join-Path $publishRoot 'projects\civil-war-field-companion\_next'
if (Test-Path -LiteralPath $prefixedAssetRoot) {
  Copy-Item -Path $prefixedAssetRoot -Destination $publishRoot -Recurse -Force
  Remove-Item -LiteralPath (Join-Path $publishRoot 'projects') -Recurse -Force
}

git -C $githubRepo add -- '.nojekyll' 'projects/civil-war-field-companion'
git -C $githubRepo diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
  git -C $githubRepo commit -m 'Publish Civil War Field Companion'
  if ($LASTEXITCODE -ne 0) { throw 'Could not commit the GitHub Pages update.' }
}

git -C $githubRepo push origin main
if ($LASTEXITCODE -ne 0) { throw 'Could not push the GitHub Pages update.' }
