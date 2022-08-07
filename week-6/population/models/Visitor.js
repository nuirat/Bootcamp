const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VisitorSchema = new Schema({
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: 'Planet'},
    visitedPlanets : [{type: Schema.Types.ObjectId, ref: 'Planet'}]
})

const Visitor = mongoose.model("visitor", VisitorSchema)
module.exports = Visitor