const mongoose = require('mongoose')
const { Schema } = mongoose

//Used to Test New Schemas

const testUSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('TestU', testUSchema, 'testU')