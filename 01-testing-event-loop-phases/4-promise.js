const TIMEOUT_MS = 10

console.log('Root Code - START')

setImmediate(() => {
  console.log('--Immediate 1')
  process.nextTick(() => { console.log('--Next Tick 2') })
})

setTimeout(() => {
  Promise.resolve().then(x => { console.log('--Promise 2') })
  setTimeout(() => { console.log('--Timeout 3') }, TIMEOUT_MS)
  setImmediate(() => { console.log('--Immediate 2') })
  process.nextTick(() => { console.log('--Next Tick 3') })

  console.log('--Timeout 1')
}, TIMEOUT_MS)

Promise.resolve().then(x => { console.log('--Promise 1') })
process.nextTick(() => { console.log('--Next Tick 1') })

console.log('Root Code - END - Event Loop Takes Over')
