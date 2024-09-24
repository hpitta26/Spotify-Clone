const mongoose = require('mongoose')
const { Schema } = mongoose

//required: false --> for attributes not needed to create user profile

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    profilepic: {
        type: String,
        required: true
    },
    followers: {
        type: [String],
        default: []

    },
    following: {
        type: [String],
        default: []
    },

    //Since User the Parent --> you must push references here
    albums: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist' 
    }],
    songs: [{ //SONG references are not deleting --> after deleted from songs Document
        type: Schema.Types.ObjectId,
        ref: 'Song' 
    }],

    
    playlists: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist' 
    }],
    likedsongs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song' 
    }]
})

module.exports = mongoose.model('User', userSchema, 'user')