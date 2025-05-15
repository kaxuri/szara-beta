import fs from "fs"
import path from "path"

const versionFilePath = path.join(process.cwd(), ".version")

export function generateVersionNumber(): string {
  const now = new Date()
  const version = now.toISOString().replace(/[-:T]/g, "").slice(0, 14)
  fs.writeFileSync(versionFilePath, version)
  return version
}

export function getVersionNumber(): string {
  if (fs.existsSync(versionFilePath)) {
    return fs.readFileSync(versionFilePath, "utf-8").trim()
  }
  return generateVersionNumber()
}
