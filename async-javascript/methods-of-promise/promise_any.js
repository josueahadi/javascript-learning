const SlowlyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'slow');
});

const QuicklyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'quick');
});

const Rejection = new Promise((resolve, reject) => {
    setTimeout(reject, 150, 'reject');
}); // always rejected

Promise.any([SlowlyDone, QuicklyDone, Rejection])
    .then(value => {
        console.log(value);// QuickluDone is the first to resolve
    })
    .catch(error => {
        console.error(error);
    });

// expected output: "quick"