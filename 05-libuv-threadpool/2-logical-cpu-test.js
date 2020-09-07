'use strict'

require('dotenv').config()
const OS = require('os')

console.log(`Logical Count = ${OS.cpus().length}`)
console.log(OS.cpus())
