const resouce1 = {
    name: 'Resource 1',
    locked: true
};

const resouce2 = {
    name: 'Resource 2',
    locked: true
};

// Function to acquire resouce 1 
function acquireResource1() {
    return new Promise((resolve, reject) => {
        if (resouce1.locked) {
            setTimeout (() => {
                acquireResource1().then(resolve);
            }, 100)
        } else {
            resouce1.locked = true;
            resolve();
        }
    })
}

// Function to acquire resouce 2 
function acquireResource2() {
    return new Promise((resolve, reject) => {
        if (resouce2.locked) {
            setTimeout (() => {
                acquireResource2().then(resolve);
            }, 100)
        } else {
            resouce2.locked = true;
            resolve();
        }
    })
}

// Perform the deadlock-prone operations 
function performDeadlockOperations() {
    acquireResource1().then(() => {
        console.log('Resource 1 acquired ' ); 
        acquireResource2().then(() => {
            console.log('Resource 2 acquired');
            console.log('Executing critical section...')
            //console.log('Waiting to acquire Resource 2...');
            // Critical section code
            releaseResouce1();
            releaseResouce2();
        });
    });
}

// Function to release resouce 1 
function releaseResouce1() {
    resouce1.locked = false;
}

// Function to release resouce 2
function releaseResouce2() {
    resouce2.locked = false;
}

performDeadlockOperations();