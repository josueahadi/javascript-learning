const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText))
        } else {
            console.error('Error:', xhr.status);    
        }
    }
};

xhr.onerror = function() {
    console.eror('Network error')
};
xhr.send();