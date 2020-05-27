const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = mongoose.model('User', new Schema({
    name: String,
    email: String,
    password: String,
    salt: String,
    role: {
        type: String,
        default: 'user' //admin
    }
}))

module.exports = UserSchema