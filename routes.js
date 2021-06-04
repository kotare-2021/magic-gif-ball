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
  var name = req.body.name
  var index = randomInt(data.ballAnswers.length)
  req.session.image = data.ballAnswers[index]
  req.session.image.answer += ' ' + name
  res.redirect('/home/')
})

module.exports = router