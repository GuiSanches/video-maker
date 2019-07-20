const FILESOURCE = './db.json';
const fs = require('fs')

function saveContent(content) {
    const contentSerialized = JSON.stringify(content)
    fs.writeFileSync(FILESOURCE, contentSerialized, 'utf8')
}

function loadContent() {
    contentSerialized = fs.readFileSync(FILESOURCE, 'utf8')
    return JSON.parse(contentSerialized)
}

module.exports = {
    saveContent,
    loadContent
}