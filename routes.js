const fs = require('fs')
const express = require('express')
const data = require(__dirname+'/data.json')
const randomInt = require('./randomInt.js')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/testPage', (req, res) => {
  res.sendFile(__dirname + '/testPage.html')
})

router.post('/', (req, res) => {
  console.log('test')
  var index = randomInt(data.ballAnswers.length)
  var image = data.ballAnswers[index]
  console.log(image)
  res.render('home', image)
})



//can we use the input.hbs for the landing page which now includes a form asking what the users name is

module.exports = router