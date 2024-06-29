function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(xhr.responseText);
          } else {
            reject(new Error(`Request failed with status ${xhr.status}`));
          }
        }
      };
      xhr.send(); // Send the request
    }, Math.random() * 2000); // Simulating asynchronous delay
  });
}

async function getDataConcurrently() {
  const promises = [
    fetchData('https://jsonplaceholder.typicode.com/users/1'),
    fetchData('https://jsonplaceholder.typicode.com/users/2'),
    fetchData('https://jsonplaceholder.typicode.com/users/3')
  ];
  
  try {
    const results = await Promise.all(promises);
    console.log(results);
  } catch (error) {
    console.error(error.message);
  }
}

getDataConcurrently();
