fetch('https://jsonplaceholder.typicode.com/users') // fake data
    .then(response => response.json()) // convert response as json
    .then(result => console.log(result)) // get json data