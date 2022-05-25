const express = require('express')
const cors = require('cors') 
const cookieSession = require('cookie-session')
require('./passport.js')
const passport= require('passport')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errormiddleware')
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const authRoute = require('./routes/auth')


connectDB()

const app = express()
 app.use(cors())
 app.use(express.json())
 app.use(express.urlencoded({ extended: false}))

 app.use(cookieSession({ name: 'session', keys: ['blog'], maxAge: 24*60*60*100}))
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth', authRoute)

//route
app.use('/api/blogs', require('./routes/blogRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))