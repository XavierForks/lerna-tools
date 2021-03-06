import fs from 'fs'
import path from 'path'

const PACKAGES_DIR = path.resolve(process.cwd(), 'packages')

function getPackages() {
  return fs
    .readdirSync(PACKAGES_DIR)
    .map(file => path.resolve(PACKAGES_DIR, file))
    .filter(f => fs.lstatSync(path.resolve(f)).isDirectory())
}

export default getPackages
