function createCancellationToken() {
    let cancel;
    const token = new Promise((_, reject) => {
        cancel = () => reject(new Error('Cancelled'));
    });
    return { token, cancel };
}

function fetchData(cancellationToken) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);

        cancellationToken.token.catch(() => {
            reject(new Error('Operation cancelled'))
        })
    })
}

const { token, cancel } = createCancellationToken();

const fetchPromise = fetchData({token}); 

setTimeout(()=> {
    cancel();
}, 1500)

fetchPromise
    .then(data => console.log(data))
    .catch(error => console.error(error.message))