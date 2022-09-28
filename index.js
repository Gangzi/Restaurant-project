require('dotenv').config()
const express = require('express')
const app = express()

// MIDDLEWEAR
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// ROUTES
app.get('/', (req, res) => {
  res.render('home')
})

//Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('*', (req, res) => {
  res.render('error404')
})

//Listen for Connections
app.listen(process.env.PORT)
