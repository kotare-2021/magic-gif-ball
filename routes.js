const fs = require('fs')
const express = require('express')
const data = require(__dirname+'/data.json')
// const hbs = 
// const data = {images:['img1', 'img2', 'img3']}
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
  // var image = data[index-1]
  var image = data.ballAnswers[index]
  console.log(image)
  res.render('home', image)
})

module.exports = router