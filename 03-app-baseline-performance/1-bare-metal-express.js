'use strict'

require('dotenv').config()

const Express = require('express')
const App = Express()
const HTTP = require('http')

// Router Setup
App.get('/', (req, res) => {
  res.send('')
})

// Server Setup
const port = process.env.PORT
const server = HTTP.createServer(App)

server.listen(port, () => {
  console.log('NodeJS Performance Optimizations listening on: ', port)
})
