const delays = [800, 1200, 500];
const fetchSimulator = (url, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            response = fetch(url);
            resolve(`Data from ${url}: ${response}`)
        }, delay)
    })
}

const request1 = fetchSimulator('https://jsonplaceholder.typicode.com/todos/3', delays[0])
const request2 = fetchSimulator('https://jsonplaceholder.typicode.com/todos/9', delays[1])
const request3 = fetchSimulator('https://jsonplaceholder.typicode.com/todos/2', delays[2])

Promise.race([request1, request2, request3])
    .then(result => {
        console.log(`This is the fastest response: ${result}`)
    })