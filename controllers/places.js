const router = require('express').Router()
const places = require('../models/places.js')

// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai-curry.jpg',
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee.jpg',
  }]

  router.get('/', (req, res) => {
    res.render('places/index', { places})
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
      res.render('places/show',{ place: places[id] })
    }
  })
  



  //GET/PLACES/NEW
  router.get('/new', (req, res) => {
    res.render('places/new')
  })

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



})



module.exports = router

