const mongoose = require('mongoose')
const { Schema } = mongoose

const playlistSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'TestU'
    }
})

module.exports = mongoose.model("Playlist", playlistSchema, "playlist")

