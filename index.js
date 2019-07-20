// const readline = require('readline-sync')
const robots = {
    input: require('./robots/input'),
    text: require('./robots/text'),
    state: require('./robots/state'),
    image: require('./robots/image')
}

async function start() {
    
    // robots.input()
    // await robots.text()
    await robots.image()

    content = robots.state.loadContent()
    console.log('ini')
    console.dir(content, {depth: null})
    console.log('end')
    
}

start();
