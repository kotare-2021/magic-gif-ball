
const express = require('express')
const hbs = require('express-handlebars')
const routes = require(__dirname + '/routes.js')
const session = require('express-session')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))
server.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'CrabGang' 
}))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here

server.use('/', routes)



module.exports = server