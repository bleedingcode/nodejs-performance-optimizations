'use strict'

const WorkerPool = require('workerpool')
const Utilities = require('../2-utilities')

// MIDDLEWARE FUNCTIONS
const bcryptHash = (password) => {
  return Utilities.bcryptHash(password)
}

// CREATE WORKERS
WorkerPool.worker({
  bcryptHash
})
