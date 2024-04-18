const mongoose = require('mongoose')

const AreaSchema = new mongoose.Schema({
    name: {type: String, required: true}
})

AreaSchema.virtual('url').get(() => `areas/${this._id}`)

module.exports = mongoose.model('Area', AreaSchema)