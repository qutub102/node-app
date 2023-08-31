const mongoose = require('mongoose')

const FormSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: 'India'
    },
    color: [String]
})

const form = mongoose.model('Form',FormSchema)

module.exports = form