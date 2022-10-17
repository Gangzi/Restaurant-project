
// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// MIDDLEWEAR
app.set('view engine', 'jsx')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
  res.render('home')
})

//Controllers & Routes
app.use('/places', require('./controllers/places'))

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
  () => {console.log('connected to : ', process.env.MONGO_URI)})


app.get('*', (req, res) => {
  res.render('error404')
})

//Listen for Connections
app.listen(process.env.PORT)
