const fs = require('fs')
const express = require('express')

const router = express.Router()

router.get('', (req, res) => {
  res.send('<h1>TEST<h1>')
})

module.exports = router