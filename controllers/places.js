const router = require('express').Router()
const places = require('../models/places.js')

router.post('/', (req, res) => {

  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'images/dog-with-sunglasses.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// GET /places
router.get('/', (req, res) => {
  res.render('places/index', { places })

})

router.get('/new', (req, res) => {
  res.render('places/new')
})
//SHOW
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})

//GET/PLACES/NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})


//DELETE
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

//EDIT
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})



module.exports = router

