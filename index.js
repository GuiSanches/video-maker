// const readline = require('readline-sync')
const robots = {
    input: require('./robots/input'),
    text: require('./robots/text'),
    state: require('./robots/state'),
    image: require('./robots/image'),
    video: require('./robots/video'),
    youtube: require('./robots/youtube')
}

async function start() {
    
    robots.input()
    await robots.text()
    await robots.image()

    const content = robots.state.loadContent()
    console.dir(content, {depth: null})
    await robots.video()
    
}

start();
