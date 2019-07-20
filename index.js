// const readline = require('readline-sync')
const robots = {
    input: require('./robots/input.js'),
    text: require('./robots/text'),
    state: require('./robots/state')
}

async function start() {
    
    robots.input()
    await robots.text()

    content = robots.state.loadContent()
    console.log('ini')
    console.dir(content, {depth: null})
    console.log('end')
    
}

start();
