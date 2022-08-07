const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SolarSchema = new Schema({
    planets:  [{type: Schema.Types.ObjectId, ref: 'Planet'}], 
    starName: String,
    
})

const  System = mongoose.model("solar", SolarSchema)
module.exports =  System