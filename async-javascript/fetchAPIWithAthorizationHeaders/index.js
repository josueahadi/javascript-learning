const data = { name: 'Josh' };

console.log('fetching data...');

fetch('https://api.contentbrainy.com', {
    method: 'GET',
    headers: {
        'Authorization': 'Basic ' + btoa('username:password'),
        'Content-Type': 'application/json'
    },
    //body: JSON.stringify(data),
    mode: 'cors',
    cache: 'default'
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error));

console.log('still fetching data!');