/* Don't worry about that file :) */

const { readdirSync } = require("fs");
const path = require("path");
const folder = prompt('Folder name?');

console.log(
    readdirSync(path.join(__dirname, '..', 'public', folder), { recursive: true, withFileTypes: true })
    .filter(f => f.isFile() && f.name != '.DS_Store')
    .map(f => `${f.path.replace(path.join(__dirname, '..', 'public'), '')}/${f.name}`)
)
console.log(path.join(__dirname, '..', 'public'))