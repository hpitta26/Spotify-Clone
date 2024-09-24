const express = require('express')
const router = express.Router()

const Playlist = require('../models/playlistModel')
const Song = require('../models/songModel')

const User = require('../models/userModel')


//Post --> One
router.post('/', async (req, res) => {
    try {
        const tarUser = await User.findOne({ username: req.body.artist })
        if (!tarUser) {
            res.status(404).json({ message: `User: '${req.body.artist}' not found` })
        }
        const tarAlbum = await Playlist.findOne({ title: req.body.album })
        if (!tarAlbum) {
            res.status(404).json({ message: `Album: '${req.body.album}' not found` })
        }

        // console.log('\n\n\n\n\nOLD USER --> # of albums:', tarUser.albums.length, '\n', tarUser)

        const newSong = new Song({
            title: req.body.title,
            artists: tarUser._id, //Make this List later
            length: 100,
            album: tarAlbum._id,
            publishdate: 'Jan 01 2024' //This Date
        })
        
        const savedSong = await newSong.save()
        tarAlbum.songs.push(newSong)
        tarUser.songs.push(newSong)
        
        // console.log('\n\n\n\n\nNEW SONG\n', newSong, '\n\n\n\n\nUPDATED USER\n', tarUser, '\n\n\n\n\nUPDATED ALBUM\n', tarAlbum)

        await tarUser.save()
        await tarAlbum.save()

        res.status(201).json(savedSong)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Get --> All
router.get('/', async (req, res) => {
    try {
        const allSongs = await Song.find()
        res.status(200).json(allSongs)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Get --> One
router.get('/:id', async (req, res) => {

})

//Delete --> All
router.delete('/', async (req, res) => {
    try {
        await Song.deleteMany({})
        const allUsers = await User.find() //removes ref from Users
        console.log(allUsers)
        const allPlaylists = await Playlist.find() //removes ref from Playlists
        for (const u of allUsers) {
            u.songs = []
            await u.save()
        }
        for (const pl of allPlaylists) {
            pl.songs = []
            await pl.save()
        }
        res.status(200).json({ message : 'All Songs & Refs Deleted'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})





module.exports = router; //exports this module as a middleware function