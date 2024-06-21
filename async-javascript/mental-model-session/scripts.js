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

function fetchData(url) {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeout = setTimeout(() => {
        controller.abort();
    }, 10);
    
    fetch(url, {signal})
    .then(response => {
        clearTimeout(timeout);
        console.log(`Response received: ${response}`);
    })
    .catch (error => {
        if (error.name == 'AbortError') {
            console.log('Request rejected due to a timeout')
        } else {
            console.log('An error occured:', error.message)
        }
        
    });   
}

fetchData('https://jsonplaceholder.typicode.com/todos');


// 2. Write a javascript function that displays a number every two seconds 
// and stops displaying after 5 seconds


function displayNumber() {
    let count = 0;
    const interval = setInterval(() => {
        console.log(count);
        count++;
        if (count >= 5) {
            clearInterval(interval);
            console.log('Stopped counting after 5 seconds')
        }
    }, 2000);
}

// function displayNumber() {
//     // let count = 0;
//     const inteval = setInterval(() => {
//         console.log('I am a number')
//         // count++;
//         // if (count> 5) {
//         //     clearInterval(interval);
//         // }
//     }, 2000);

//     setTimeout(() => {
//         clearInterval(interval)
//     }, 5000);
      
// }

displayNumber();