const mongoose = require('mongoose')

const DishSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, min: 0}
})

DishSchema.virtual('url').get(() => `/dishes/${this._id}`)

module.exports = mongoose.model('Dish', DishSchema)