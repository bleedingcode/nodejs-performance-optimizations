const TIMEOUT_MS = 10

console.log('Root Code - START')

setTimeout(() => { console.log('--Timeout 1') }, TIMEOUT_MS)
setImmediate(() => { console.log('--Immediate 1') })

setTimeout(() => {
  setTimeout(() => { console.log('--Timeout 3') }, TIMEOUT_MS)
  setImmediate(() => { console.log('--Immediate 2') })

  console.log('--Timeout 2')
}, TIMEOUT_MS)

// process.nextTick(() => { console.log('--Next Tick 1') })

process.nextTick(() => {
  process.nextTick(() => { console.log('--Next Tick 2') })
  console.log('--Next Tick 1')
})

console.log('Root Code - END - Event Loop Takes Over')
