
const express = require('express')
const router = express.Router()

let axios=require('axios')

router.get('/synonyms/:word', function (req, res) {
    let thesauraus = {
        'Absolute': ['Definitive', 'Certain', 'Sure', 'Unequivocal'],
        'Astute': ['Sharp', 'Poignant', 'Clever'],
        'Azure': ['Blue', 'Cyan', 'Sky-blue'],
        'Bright': ['Luminous', 'Brilliant'],
        'Bonanza': ['Plethora', 'Smorgasboard', 'Copious', 'Plenty'],
        'Elusive': ['Slick', 'Slippery', 'Ethereal', 'Loose'],
        'Erode': ['Destroy', 'Wear out', 'Tarnish'],
        'Hindrance': ['Bother', 'Disturbance', 'Problematic'],
        'Phonic': ['Soundful'],
        'Ploy': ['Plan', 'Ruse'],
        'Polaroid': ['Photograph'],
        'Yap': ['Bark', 'Blab', 'Chatter'],
        'Yonder': ['There', 'Away', 'Far', 'Afar']
    }

    let word = req.params.word
    res.send(thesauraus[word])
})

router.get('/sentiment/:word', function (req, res) {
    let word = req.params.word
    let wordSentiment = {
        'Absolute': 1,
        'Astute': 1,
        'Azure': 0,
        'Bright': 1,
        'Bonanza': 1,
        'Elusive': -1,
        'Erode': -1,
        'Hindrance': -1,
        'Phonic': 0,
        'Ploy': 0,
        'Polaroid': 0,
        'Yap': -1,
        'Yonder': -1
    }

    res.send(JSON.stringify(wordSentiment[word]))
})


router.get('/randomWord', function (req, res) {
    let words = ['Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder']
    Promise.all([axios.get(`https://api.giphy.com/v1/gifs/search?api_key=908p7K4A4oAw7WVG1ufmh3GZHEx5Sdvu&q=cat`),axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle/${words[Math.floor(Math.random() * words.length)]}`)]).then(results=>
   { console.log(results[0].data.data[0].url)
    console.log(results[1].data.items[0].volumeInfo.title);
    res.send({title:results[1].data.items[0].volumeInfo.title,gip:results[0].data.data[0].url})
})
   
})

module.exports = router