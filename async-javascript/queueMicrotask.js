console.log('Script Start')

queueMicrotask(() => console.log('Microtask 1'))
queueMicrotask(() => console.log('Microtask 2'))
queueMicrotask(() => console.log('Microtask 3'))

console.log('Script End')