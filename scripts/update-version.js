const fs = require("fs")
const path = require("path")

function generateVersionNumber() {
  const now = new Date()
  return now.toISOString().replace(/[-:T]/g, "").slice(0, 14)
}

function updateVersion() {
  const version = generateVersionNumber()
  console.log(`Updating version to: ${version}`)

  // Update .env file
  const envPath = path.join(process.cwd(), ".env")
  let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf-8") : ""

  const versionRegex = /^NEXT_PUBLIC_APP_VERSION=.*/m
  const newVersionLine = `NEXT_PUBLIC_APP_VERSION=${version}`

  if (versionRegex.test(envContent)) {
    envContent = envContent.replace(versionRegex, newVersionLine)
  } else {
    envContent += `\n${newVersionLine}`
  }

  fs.writeFileSync(envPath, envContent)
  console.log("Updated .env file with new version")
}

updateVersion()
