
var bodyParser = require('body-parser')
var express = require('express')
var app = express()

var mongoose = require('mongoose')
var System = require("./models/SolarSystem")
var Planet = require("./models/Planet")
var Visitor = require("./models/Visitor")

mongoose.connect("mongodb://localhost/mongoose-practice")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// let s1 = new System({planets:[],starName:'otarid'})
// let p1 = new Planet({name:'ahmad',visitors:[]})
// let p2 = new Planet({name:'nuirat',visitors:[]})
// let v1 = new Visitor({name:'idk',visitedPlanets:[],homePlanet:p1})
// s1.planets.push(p1)
// v1.visitedPlanets.push(p2)
// p2.visitors.push(v1)
// s1.save()
// p1.save()
// p2.save()
// v1.save()
Planet.findOne({})
    .populate("visitors")
    .exec(function (err, book) {
        console.log(book)
    })
Planet.find({})
    .populate("visitors")
    .exec(function (err, visitor) {
        console.log(visitor)
    })

app.listen(3000, function() {
  console.log("Server up and running on port 3000")
})
