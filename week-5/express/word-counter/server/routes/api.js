
const express = require('express')
const router = express.Router()
let words={}
router.delete('/words/:name', function (req, res) {
    let word = req.params.name
    delete words[word]
    res.send(res.statusCode)
})
router.post('/word', function (req, res) {
    console.log("About to update someone")
    let word =req.body
    console.log(word['word']);
    if(word['word'] in words)
words[word['word']]++
else
words[word['word']]=1
res.send({text: `Added ${word['word']}`, currentCount: words[word['word']] })// don't forget to end the cycle!
})

router.post('/words', function (req, res) {
    let word =req.body
    console.log(word['words']);
    for(word of word['words'].split(' '))
     { 
        if(word in words)
        words[word]++
      else
        words[word]=1

     }
     res.send(words)// don't forget to end the cycle!

}
)

router.get('/', function (req, res) {
    res.send('Server up and running')
})
router.get('/word/:name', function (req, res) {
    res.send({wordcount : words[req.params.name]||0})
})
module.exports = router