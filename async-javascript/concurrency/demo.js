function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', url, true);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(xhr.responseText)
                    } else {
                        reject(xhr.status);
                    }
                }
            }

        }, Math.random() * 2000); // Simulating asynchronous delay
    })
}

async function getDataConcurrently() {
    const promises = [
        fetchData('https://jsonplaceholder.typicode.com/users/1'),
        fetchData('https://jsonplaceholder.typicode.com/users/2'),
        fetchData('https://jsonplaceholder.typicode.com/users/3')
    ]

    const results = await Promise.all(promises)
        .then(results => results.forEach(result => console.log(`USER:\n${result}`)))
        .catch(error => console.erorr(error.message))
}

getDataConcurrently()