'use strict'

const Axios = require('axios')
const Mongoose = require('mongoose')
const BCrypt = require('bcrypt')
const { AsyncDebugger } = require('../lib/async-debugger')
const asyncDebugger = new AsyncDebugger()

// TEST FUNCTIONS
const testHTTP = async () => {
  await Axios.get('https://agilite.io')
}

const testMongo = async () => {
  await Mongoose.connect('mongodb://localhost/test')
  Mongoose.disconnect()
}

const testBCrypt = () => {
  const saltRounds = 10
  const myPlaintextPassword = 'changemenow'

  BCrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return false

    BCrypt.hash(myPlaintextPassword, salt, (err, hash) => {
      if (err) return false
    })
  })
}

// ASYNC TRACKER
asyncDebugger.startTracking('Test', testHTTP)
