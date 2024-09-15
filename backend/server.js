const express = require('express')
const app = express() //Express 'constructor', creates an Express app and assigns it to 'app'
app.use(express.json()) //middleware --> parses incoming JSON requests and puts data in "req.body"


const cors = require('cors')
app.use(cors({
    origin: 'http://localhost:3000' //Allows requests from PORT:3000 (frontend)

    // origin: ['', '', ''] -> only certain origins can access the API
    // origin: '*' --> public API
}))


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/sp-clone-db')
const db = mongoose.connection

//Print whether it is connected to the DataBase or not
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))




//localhost:9000/users
const userRouter = require('./routes/users')
app.use('/users', userRouter)





app.listen(9000, (error) => { //Listens to requests @ Port:9000
    if (!error) {
        console.log('Server is Running')
    } else {
        console.log('Error Occurred: ', error)
    }
})
