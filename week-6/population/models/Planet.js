const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlanetSchema = new Schema({
    name: String,
    system: {type: Schema.Types.ObjectId, ref: 'System'},
    visitors: [{type: Schema.Types.ObjectId, ref: 'Visitor'}]
})

const Planet = mongoose.model("planet", PlanetSchema)
module.exports = Planet