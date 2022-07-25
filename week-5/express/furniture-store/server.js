const express = require('express')
const path = require('path')
const app = express()
let store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]
app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))
console.log(path.join(__dirname, 'node_modules'));

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
app.get('/', function(request, response){
    
    response.send('Server is up and running smoothly')
})
app.get('/priceCheck/:name', function(request, response){
console.log(store.filter((item)=>item.name==request.params.name));
    response.send( store.filter((item)=>item.name==request.params.name))
})
app.get('/buy/:name', function(request, response){
    item =store.filter((item)=>item.name==request.params.name)[0]
    store=store.filter((item)=>item.name!=request.params.name)
    item.inventory--
    store.push(item)
    console.log(store);
        response.send(item)
    })
