// THEORY CODE SNIPPET 

// function immediateCallback() {
//     console.log('Start');
//     setTimeout(() => {
//       console.log('Timeout');
//     }, 0);
//     Promise.resolve().then(() => {
//       console.log('Promise');
//     });
//     console.log('End');
//   }

//   immediateCallback();

// PRACTICAL

// Imagine you are developing a real-time news application, and you need to fetch posts from three different sources to provide users 
// with the latest updates.
// The API endpoints for getting posts are:
// https://dummyjson.com/posts
// https://this-may-not-exist.com/posts
// https://jsonplaceholder.typicode.com/posts
// To ensure a seamless user experience, you are supposed to create a function called getFastPosts that fetches posts from 
// these endpoints simultaneously (concurrently) and only presents data from the source that responds the quickest, 
// while ignoring slower or potentially unreliable sources.

// Example of how the function should be used
// // getFastPosts() code here...


async function getFastPosts() {

    try {
        const endpoint1 = 'https://dummyjson.com/posts';
        const endpoint2 = 'https://this-may-not-exist.com/posts';
        const endpoint3 = 'https://jsonplaceholder.typicode.com/posts';

        const response1 = (await fetch(endpoint1)).json();
        const response2 = (await fetch(endpoint2)).json();
        const response3 = (await fetch(endpoint3)).json();

        const fastest = await Promise.any([response1, response2, response3])

        return fastest;
    }
    catch (error) {
        console.log('Network error', error.message)
    }
}

getFastPosts().then((posts) => {
    console.log(posts)
})