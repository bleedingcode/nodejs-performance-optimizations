'use strict'

const Axios = require('axios')
const { AsyncDebugger } = require('../lib/async-debugger')
const asyncDebugger = new AsyncDebugger()

// TEST FUNCTIONS
const testCustomFetch = () => {
  _testCustomFetchExtended1()
}

// PRIVATE FUNCTIONS
const _testCustomFetchExtended1 = () => {
  let x = 0
  const y = 10

  for (; x < y; x++) console.log('Test')
  _testCustomFetchExtended2()
}

const _testCustomFetchExtended2 = async () => {
  await Axios.get('https://agilite.io')
}

// ASYNC TRACKER
asyncDebugger.startTracking('Test', testCustomFetch)
