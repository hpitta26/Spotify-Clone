//require in Node.js is their 'import' statement
const express = require('express')
const router = express.Router()
const User = require('../models/userModel')


//Get --> All or Username
router.get('/', async (req, res) => {
    if (!req.query.username) { //Get --> All
        try {
            const allUsers = await User.find() //Returns all 'User's in route '/'
            res.status(200).json(allUsers)
        } catch (err) {
            res.status(500).json({ message: err.message}) //500 -> there was an error in DB
        }
    } else { //Get --> username
        try {
            const tarUser = await User.findOne({ username: req.query.username })
            if (!tarUser) {
                //Must return here or will throw error from 2 responses
                return res.status(404).json({ message: `User: '${req.query.username}' not found` })
            }
            res.status(200).json(tarUser)
        } catch (err) {
            res.status(500).json({ message: err.message})
        }
    }
})

//Get --> One
router.get('/:id', async (req, res) => {

})

//Post --> One
router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        profilepic: req.body.profilepic,
        followers: req.body.followers,
        following: req.body.following,
        playlists: req.body.playlists
    })

    try {
        const savedUser = await user.save()
        res.status(201).json(savedUser) //201 -> successfully created an Object
    } catch (err) {
        res.status(400).json({ message: err.message}) //400 -> something wrong with the input
    }
})





module.exports = router; //exports this module as a middleware function