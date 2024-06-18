const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 300);
}); // will be resolved after 0.3 seconds

const promise2 = 93; // not a promise

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 3000);
}); // will be resolved after 3 seconds

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values);
    }).catch((error) => {
        console.error(error);
    });

// expected output: ["Promise 1 resolved", 93, "Promise 2 resolved"]


// Fail-Fast Behaviour

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Resolve');
//     }, 300);
// }); 

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Resolve');
//     }, 1000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Reject');
//     }, 2000);
// });


// Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//         console.log(values);
//     }).catch((error) => {
//         console.error(error);
//     });

