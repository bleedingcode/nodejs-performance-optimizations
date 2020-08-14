'use strict'

const { AsyncDebugger } = require('../lib/async-debugger')
const TIMEOUT_MS = 10
const INTERVAL_MS = 2000
const asyncDebugger = new AsyncDebugger()

// TEST FUNCTIONS
const testTimeout = () => {
  setTimeout(() => {}, TIMEOUT_MS)
}

const testInterval = () => {
  setInterval(() => { console.log('I am an Interval') }, INTERVAL_MS)
}

const testImmediate = () => {
  setImmediate(() => {})
}

const testNextTick = () => {
  process.nextTick(() => {})
}

const testAsyncFunction = async () => {}

const testPromise = () => {
  new Promise((resolve) => resolve(true)).then((a) => {})
}

const testConsoleLog = () => {
  console.log('I am a Console Log')
}

// ASYNC TRACKER
asyncDebugger.startTracking('Test', testNextTick)
