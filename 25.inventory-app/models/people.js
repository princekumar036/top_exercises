const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PeopleSchema = new Schema({
    name: {type: String, required: true},
    image: {type: URL},
    // phone: {type: Number, min: 1111111111, max: 9999999999}
    dhaba: {type: Schema.Types.ObjectId, ref: 'Dhaba'}
})

PeopleSchema.virtual('url').get(() => `/people/${this._id}`)

module.exports = mongoose.model("People", PeopleSchema)