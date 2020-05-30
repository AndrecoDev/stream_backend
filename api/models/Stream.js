const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StreamSchema = mongoose.model('stream', new Schema({
    name: String,
    streamUrl: String
}))

module.exports = StreamSchema