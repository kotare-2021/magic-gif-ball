
const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const routes = require(__dirname + '/routes.js')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here

server.use('/', routes)



module.exports = server