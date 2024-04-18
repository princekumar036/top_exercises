const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DhabaSchema = new Schema({
    name: {type: String, required: true},
    area: {type: Schema.Types.ObjectId, ref: 'Area'},
    address: {type: String, required: true},
    phone: {type: Number, min: 1111111111, max: 9999999999},
    // dishes: [{type: Schema.Types.ObjectId, ref: 'Dish'}],
    people: [{type: Schema.Types.ObjectId, ref: 'People'}]
})

PeopleSchema.virtual('url').get(() => `/dhabas/${this._id}`)

module.exports = mongoose.model('Dhaba', DhabaSchema)