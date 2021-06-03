const fs = require('fs')
const express = require('express')

const router = express.Router()

router.get('', (req, res) => {
  res.send('<h1>TEST<h1>')
})

router.get('/testPage', (req, res) => {
  res.sendFile(__dirname + '/testPage.html')
})

module.exports = router