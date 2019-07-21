const FILESOURCE = './content.json'
const fs = require('fs')
const scriptFilePath = './content/after-effects-script'

function saveContent(content) {
    const contentSerialized = JSON.stringify(content)
    fs.writeFileSync(FILESOURCE, contentSerialized, 'utf8')
}

function saveScript(content) {
    const contentString = JSON.stringify(content)
    const scriptString = `var content = ${contentString}`
    return fs.writeFileSync(scriptFilePath, scriptString)
}

function loadContent() {
    contentSerialized = fs.readFileSync(FILESOURCE, 'utf8')
    return JSON.parse(contentSerialized)
}

module.exports = {
    saveContent,
    saveScript,
    loadContent
}