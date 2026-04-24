$ErrorActionPreference = "Stop"

$baseUrl = "https://www.transportstyrelsen.se"
$mainUrl = "$baseUrl/sv/vagtrafik/trafikregler-och-vagmarken/vagmarken/"
$outputPath = Join-Path $PSScriptRoot "quizData.js"

function Invoke-TransportPage {
    param(
        [string] $Url
    )

    return Invoke-WebRequest -UseBasicParsing $Url
}

function Decode-Html {
    param(
        [string] $Value
    )

    if ([string]::IsNullOrWhiteSpace($Value)) {
        return ""
    }

    return [System.Net.WebUtility]::HtmlDecode($Value).Trim()
}

function Escape-JsString {
    param(
        [string] $Value
    )

    return $Value.Replace("\", "\\").Replace('"', '\"')
}

function Get-CategoryPages {
    $mainPage = Invoke-TransportPage $mainUrl

    return $mainPage.Links |
        Where-Object {
            $_.href -like "/sv/vagtrafik/trafikregler-och-vagmarken/vagmarken/*" -and
            $_.href -ne "/sv/vagtrafik/trafikregler-och-vagmarken/vagmarken/"
        } |
        Select-Object -ExpandProperty href -Unique |
        Sort-Object
}

function Get-SignPageUrls {
    param(
        [string[]] $CategoryPaths
    )

    $pageUrls = [System.Collections.Generic.HashSet[string]]::new()

    foreach ($categoryPath in $CategoryPaths) {
        $categoryPage = Invoke-TransportPage "$baseUrl$categoryPath"
        $childLinks = $categoryPage.Links |
            Where-Object {
                $_.href -like "$categoryPath*" -and
                $_.href -ne $categoryPath
            } |
            Select-Object -ExpandProperty href -Unique

        foreach ($childLink in $childLinks) {
            $null = $pageUrls.Add("$baseUrl$childLink")
        }
    }

    return @($pageUrls) | Sort-Object
}

function Get-ImageUrlFromPage {
    param(
        [string] $Url
    )

    $page = Invoke-TransportPage $Url
    $match = [System.Text.RegularExpressions.Regex]::Match(
        $page.Content,
        '<div class="roadsign-image-sizing-wrapper.*?<img src="([^"]+)"',
        [System.Text.RegularExpressions.RegexOptions]::Singleline
    )

    if (-not $match.Success) {
        return $null
    }

    $imagePath = Decode-Html $match.Groups[1].Value.Trim()

    if ($imagePath.StartsWith("http")) {
        return $imagePath
    }

    return "$baseUrl$imagePath"
}

function Get-NameFromImageUrl {
    param(
        [string] $ImageUrl
    )

    $segments = $ImageUrl.TrimEnd("/").Split("/")
    $slug = $segments[$segments.Length - 2]
    $slug = [System.Text.RegularExpressions.Regex]::Replace($slug, "^[a-z0-9]+\.-", "")

    $words = $slug.Split("-") |
        Where-Object { $_ -ne "" } |
        ForEach-Object {
            if ($_.Length -gt 1) {
                $_.Substring(0, 1).ToUpper() + $_.Substring(1)
            } else {
                $_.ToUpper()
            }
        }

    return $words -join " "
}

$categoryPages = Get-CategoryPages
$pageUrls = Get-SignPageUrls $categoryPages
$signs = [System.Collections.Generic.List[hashtable]]::new()

foreach ($pageUrl in $pageUrls) {
    $imageUrl = Get-ImageUrlFromPage $pageUrl

    if ($null -eq $imageUrl) {
        continue
    }

    $signs.Add([ordered]@{
        name = Get-NameFromImageUrl $imageUrl
        imageUrl = $imageUrl
    })
}

$outputLines = @("const signs = [")

for ($index = 0; $index -lt $signs.Count; $index += 1) {
    $sign = $signs[$index]
    $comma = if ($index -lt $signs.Count - 1) { "," } else { "" }

    $outputLines += "    {"
    $outputLines += "        name: ""$(Escape-JsString $sign["name"])"","
    $outputLines += "        imageUrl: ""$(Escape-JsString $sign["imageUrl"])""
    $outputLines += "    }$comma"
}

$outputLines += "];"

[System.IO.File]::WriteAllText($outputPath, ($outputLines -join [Environment]::NewLine), [System.Text.Encoding]::UTF8)
Write-Output "Generated $($signs.Count) signs into $outputPath"
