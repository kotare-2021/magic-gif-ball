const fs = require('fs')
const express = require('express')
const data = require(__dirname+'/data.json')
const randomInt = require('./randomInt.js')

const router = express.Router()

var image = {}

router.get('/', (req, res) => {
  res.render('input')
})

router.get('/result', (req, res) => {
  res.render('home', req.session.image)
})

router.post('/result', (req, res) => {
  res.render('home', req.session.image)
})

router.post('/', (req, res) => {
  console.log('test')
  var index = randomInt(data.ballAnswers.length)
  req.session.image = data.ballAnswers[index]
  console.log(req.session.image)
  res.redirect('/home/result/')
})

//can we use the input.hbs for the landing page which now includes a form asking what the users name is

module.exports = router