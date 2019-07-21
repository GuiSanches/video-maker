const imageDownloader = require('image-downloader')
const google = require('googleapis').google
const customSearch = google.customsearch('v1')
const state = require('./state')

const googleSearchCredentials = require('../credentials/google-search.json')

async function robot() {
    const content = state.loadContent()

    await fetchImagesOfAllSentences(content)
    await downloadAllImages(content)

    state.saveContent(content)

    async function fetchImagesOfAllSentences(content) {
        for(const sentence of content.sentences) {
            const query = `${content.searchTerm} ${sentence.keywords[0]}`
            sentence.images = await fetchGoogleAndReturnImagesLinks(query)

            sentence.googleSearchQuery = query
        }
    }
    async function fetchGoogleAndReturnImagesLinks(query) {
        const response = await customSearch.cse.list({
            auth: googleSearchCredentials.apiKey,
            cx: googleSearchCredentials.searchEngineId,
            q: query,
            searchType: 'image',
            imgSize: 'huge',
            num: 2,
        }) 
        const imagesUrl = response.data.items.map(item => item.link)
        return imagesUrl
    }

    async function downloadAllImages(content) {
        content.downloadedImages = []

        content.sentences[1].images[0] = 'http://i.yting.com/michael.jpg'

        for(let sentenceIndex = 0; sentenceIndex < content.sentences.length; sentenceIndex++) {
            const images = content.sentences[sentenceIndex].images

            for(let imageIndex = 0; imageIndex < images.length; imageIndex++) {
                const imageUrl = images[imageIndex]

                try {
                    if(content.downloadedImages.includes(imageUrl)) {
                        throw new Error('Imagem já foi baixada')
                    }
                    content.downloadedImages.push(imageUrl)
                    await downloadAndSave(imageurl, `${sentenceindex}-original.png`)
                    console.log(`Baixou imagem com sucesso: ${imageUrl}`)
                    break;
                } catch(error) {
                    console.log(`> Erro ao baixar (${imageUrl}): ${error}`)
                }
            }
        }
    }

    async function downloadAndSave(url, filename) {
        return imageDownloader.image({
            url, url,
            dest: `./content/${fileName}`
        })
    }

}
 module.exports = robot