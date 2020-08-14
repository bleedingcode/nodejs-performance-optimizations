const TIMEOUT_MS = 10

console.log('Root Code - START')

setTimeout(() => { console.log('--Timeout') }, TIMEOUT_MS)

console.log('Root Code - END - Event Loop Takes Over')
