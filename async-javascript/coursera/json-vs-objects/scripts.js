// Function to fetch and work with JSON data
function fetchBooks() {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            // Data contains the JSON content
            data.forEach(book => {
                console.log('List of Books: ')
                console.log(`Author: ${book.author}`)
                console.log(`Title: ${book.title}`)
                console.log(`Publication year: ${book.publicationYear}`)
                console.log(`-------------------------------`)
            })
        })
        .catch(error => {
            console.log('Eror ferching JSON data:', error)
        })
}

fetchBooks();