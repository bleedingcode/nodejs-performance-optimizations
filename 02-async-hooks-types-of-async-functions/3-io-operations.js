'use strict'

const FS = require('fs')
const Path = require('path')
const { AsyncDebugger } = require('../lib/async-debugger')
const asyncDebugger = new AsyncDebugger()

// TEST FUNCTIONS
const testReadFile = () => {
  FS.readFile(Path.join(__dirname, '../package.json'), () => {})
}

// ASYNC TRACKER
asyncDebugger.startTracking('Test', testReadFile)
