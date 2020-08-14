'use strict'

const AsyncHooks = require('async_hooks')
const FS = require('fs')
const TIMEOUT_MS = 10

// ASYNC TRACKER
AsyncHooks.createHook({
  init (asyncId, type, triggerAsyncId) {
    const id = AsyncHooks.executionAsyncId()
    FS.writeSync(1, `- ${type}(${asyncId}): trigger: ${triggerAsyncId} execution: ${id}\n`)
  }
}).enable()

// TEST FUNCTIONS
setTimeout(() => {}, TIMEOUT_MS)
