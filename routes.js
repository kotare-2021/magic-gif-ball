const fs = require('fs')
const express = require('express')
const data = require(__dirname+'/data.json')
const randomInt = require('./randomInt.js')

const router = express.Router()

var image = {}

router.get('/', (req, res) => {
  res.render('input')
})

router.get('/home', (req, res) => {
  res.render('home', req.session.image)
})

router.post('/home', (req, res) => {
  res.render('result', req.session.image)
})

router.post('/', (req, res) => {
  console.log('test')
  var name = req.body.name
  var index = randomInt(data.ballAnswers.length)
  req.session.image = data.ballAnswers[index]
  req.session.image.username = name
  console.log(req.session.image)
  res.redirect('/home/')
})

//can we use the input.hbs for the landing page which now includes a form asking what the users name is

module.exports = router