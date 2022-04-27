const express = require('express')
const cors = require('cors') 
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errormiddleware')
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

const app = express()
 app.use(cors())
 app.use(express.json())
 app.use(express.urlencoded({ extended: false}))

//route
app.use('/api/blogs', require('./routes/blogRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))