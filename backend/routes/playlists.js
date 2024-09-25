//require in Node.js is their 'import' statement
const express = require('express')
const router = express.Router()

const Playlist = require('../models/playlistModel')

const User = require('../models/userModel')


//Post --> One
router.post('/', async (req, res) => {
    //req.query --> will include the usename or _id of the (Owner of this playlist)
    if (!req.body.playlist) {
        //Post ALBUM
        try {
            const tarUser = await User.findOne({ username: req.body.owner })
            if (!tarUser) { //user doesn't exist
                return res.status(404).json({ message: `User: '${req.body.owner}' not found` })
            }
            const newPlaylist = new Playlist ({
                title: req.body.title,
                // songs: req.body.songs,
                owner: tarUser._id
            })
            // console.log(newPlaylist)
            const savedPl = await newPlaylist.save() 
            tarUser.albums.push(newPlaylist) 
            await tarUser.save()
            res.status(201).json(savedPl)
        } catch (err) {
            res.status(400).json({ message: err.message }) //Smt wrong with input
        }
        return
    } else if (req.body.playlist == true) {
        //Post PLAYLIST
        try {
            const tarUser = await User.findOne({ username: req.body.owner })
            if (!tarUser) { //user doesn't exist
                return res.status(404).json({ message: `User: '${req.body.owner}' not found` })
            }
            const newPlaylist = new Playlist ({
                title: req.body.title,
                // songs: req.body.songs,
                owner: tarUser._id,
                playlist: true
            })
            const savedPl = await newPlaylist.save() 
            tarUser.playlists.push(newPlaylist) 
            await tarUser.save()
            res.status(201).json(savedPl)
        } catch (err) {
            res.status(400).json({ message: err.message }) //Smt wrong with input
        }
        return
    }


    res.status(204).json({ message: 'Request Not Implemented Yet...' })
})

//Get --> All
router.get('/', async (req, res) => {
    try {
        const allPlaylists = await Playlist.find()
        res.status(200).json(allPlaylists)
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
        await Playlist.deleteMany({})
        const allUsers = await User.find()
        for (const u of allUsers) {
            u.albums = []
            u.playlists = []
            await u.save()
        }
        res.status(200).json({ message : 'All Playlists Deleted'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})





module.exports = router; //exports this module as a middleware function