// 1. Write a function that takes a URL and fetches data from that URL 
// but aborts when the request takes more than 10ms

// async function fetchData(url) {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     const timeout = setTimeout(() => {
//         controller.abort();
//     }, 4000);
//     try {
//         const response = await fetch(url, {signal});
//         clearTimeout(timeout);
//         console.log(`Response received: ${response}`);
//     } catch (error) {
//         if (error.name == 'AbortError') {
//             console.log('Request rejected due to a timeout')
//         } else {
//             console.log('An error occured:', error.message)
//         }
        
//     }
    
// }

// function fetchData(url) {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     const timeout = setTimeout(() => {
//         controller.abort();
//     }, 10);
    
//     fetch(url, {signal})
//     .then(response => {
//         clearTimeout(timeout);
//         console.log(`Response received: ${response}`);
//     })
//     .catch (error => {
//         if (error.name == 'AbortError') {
//             console.log('Request rejected due to a timeout')
//         } else {
//             console.log('An error occured:', error.message)
//         }
        
//     });   
// }

// fetchData('https://jsonplaceholder.typicode.com/todos');


// 2. Write a javascript function that displays a number every two seconds 
// and stops displaying after 5 seconds


// function displayNumber() {
//     let count = 0;
//     console.log(`Start counting`)
//     const interval = setInterval(() => {
//         console.log(count);
//         count++;
//     }, 2000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log(`Stopped counting after 5 seconds`);
//     }, 5000)
// }

// displayNumber();

// 3. Write a JavaScript function that fetches data from an API 
// and retries the request a specified number of times if it fails

// async function retryFetch(url, retries) {
//     try {
//         const response = await fetch(url);
//         let count = retries;
//         if (response.status !== 200 & count > 1) {
//             count--;
//             retryFetch(url, count);
//             console.log('Retrying')
            
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// var promise = retryFetch("https://jsonplaceholder.typicode.com/todoss", 3)
// console.log(promise)


// 4. Write a JavaScript function fetchToDo that uses XMLHttpRequest to fetch data from the given URL

// async function fetchToDo(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         throw new Error(`An error occurred: ${error.message}`);
//     }
// }

// const promise2 = fetchToDo('https://jsonplaceholder.typicode.com/todos');
// promise2.then(data => console.log(data)).catch(error => console.error(error));

// function fetchToDo() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                try {
//                 const data = JSON.parse(xhr.responseText);
//                 console.log(data);
//                } catch(e) {
//                 console.error('Error parsing JSON reponse:', e)
//                }
//             } else {
//                 console.log('Error: failed to fetch data. Status code:', xhr.status)
//             }
//         }
//     }
//     xhr.onerror = function() {
//         console.error('Network error or invalid URL');
//     }
//     xhr.send();
// }

// fetchToDo();



// 5. Extending the function with custom headers and JSON Payload

function fetchTodoWithHeadersAndPayload(url, payload) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);

    // Set custom headers
    xhr.setRequestHeader('User-Agent', 'MyCustomApp');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            let data = JSON.parse(xhr.responseText);
            console.log(data);
        } else {
            console.error("Server error: ", xhr.status);
        }
    };
    xhr.onerror = function() {
        console.log("Connection error");
    };

    let jsonPayload = JSON.stringify(payload)
    xhr.send(jsonPayload);
}

const todoId = 1;
const payload = { completed: false, title: 'New Task' };
fetchTodoWithHeadersAndPayload(`https://jsonplaceholder.typicode.com/todos/${todoId}`, payload);
