// Using fetchSimulator simulate fetching data from three different URLs in parallel.
// Each "fetch" will be represented by a Promise that resolves after a delay taken from the delays array.

// Use Promise.all to wait for all these Promises to resolve and then process the results.

const delays = [800, 1200, 2000]

const fetchSimulator = (url, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Data from ${url}`)
        }, delay)
    })
};

const request1 = fetchSimulator('https://jsonplaceholder.typicode.com/todos/1', delays[0])
const request2 = fetchSimulator('https://jsonplaceholder.typicode.com/todos/2', delays[1])
const request3 = fetchSimulator('https://jsonplaceholder.typicode.com/todos/3', delays[2])

Promise.all([request1, request2, request3])
    .then(result => {
        console.log(result)
    })