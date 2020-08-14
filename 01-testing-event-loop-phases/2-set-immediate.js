const TIMEOUT_MS = 0

console.log('Root Code - START')

setTimeout(() => { console.log('--Timeout 1') }, TIMEOUT_MS)
setImmediate(() => { console.log('--Immediate 1') })

setTimeout(() => {
  setTimeout(() => { console.log('--Timeout 3') }, TIMEOUT_MS)
  setImmediate(() => { console.log('--Immediate 2') })

  console.log('--Timeout 2')
}, TIMEOUT_MS)

console.log('Root Code - END - Event Loop Takes Over')
