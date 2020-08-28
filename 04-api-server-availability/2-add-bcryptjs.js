'use strict'

require('dotenv').config()

const Express = require('express')
const App = Express()
const HTTP = require('http')
const BCrypt = require('bcryptjs')

// Router Setup
App.get('/pulse', (req, res) => {
  res.send('')
})

App.get('/stress', async (req, res) => {
  const hash = await BCrypt.hash('this is a long password', 8)
  res.send(hash)
})

// Server Setup
const port = process.env.PORT
const server = HTTP.createServer(App)

server.listen(port, () => {
  console.log('NodeJS Performance Optimizations listening on: ', port)
})
