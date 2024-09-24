const mongoose = require('mongoose')
const { Schema } = mongoose

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    artists: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true 
    }],
    length: {
        type: Number,
        required: true,
        validate: [lenValidate, 'Song length must be Positive!']
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Playlist',
        // required: true
    },
    publishdate: {
        type: String, //Change this to, type: Date ??
        required: true
    }

})

function lenValidate(songLen) {
    return songLen > 0;
}

module.exports = mongoose.model("Song", songSchema, "song")