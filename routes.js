const fs = require('fs')
const express = require('express')
// const data = require(__dirname+'/data.json')
const data = {images:['img1', 'img2', 'img3']}
const randomInt = require('./randomInt.js')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h1>TEST<h1>')
})

router.get('/testPage', (req, res) => {
  res.sendFile(__dirname + '/testPage.html')
})

router.post('/testPage', (req, res) => {
  var index = randomInt(data.length)
  var image = data[index]
  res.render('home', image)
})

module.exports = router