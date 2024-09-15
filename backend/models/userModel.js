const mongoose = require('mongoose')

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


    albums: {
        type: [String],
        default: []
    },
    songs: {
        type: [String],
        default: []
    },


    playlists: {
        type: [String],
        default: []
    },
    likedsongs: {
        type: [String],
        default: []
    }  
})

module.exports = mongoose.model('User', userSchema, 'user')