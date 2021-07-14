const {Schema, model} = require('mongoose')


const WeightSchema = Schema({

    weight:{
        type:Number,
        required:true
    },

    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = model('Weight', WeightSchema)