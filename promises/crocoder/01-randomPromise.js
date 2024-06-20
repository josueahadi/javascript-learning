// Create a JavaScript Promise that, after a delay of 2 seconds, 
// either resolves with the message "Hello World" or rejects 
// with the error message "Error occurred".

// The outcome (resolve or reject) should be determined by a random condition, 
//ensuring a 50/50 chance of either occurring each time the code runs.

const randomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const shouldResolve = Math.random() > 0.5;
        (shouldResolve) ? resolve('Hello World') : reject('Error occured');        
    }), 2000;
});

randomPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});