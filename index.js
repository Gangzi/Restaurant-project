require('dotenv').config()
const express = require('express')
const app = express()

// MIDDLEWEAR
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/', (req, res) => {
  res.render('home')
})

app.use('/places', require('./controllers/places'))

app.get('*', (req, res) => {
  res.render('error404')
})


app.listen(process.env.PORT)
