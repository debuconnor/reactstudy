fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
})
    .then(response => response.json())
    .then(result => console.log(result)) 