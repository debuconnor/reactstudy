const user_ = {
    "name": "Connor Jo",
    "username": "connor",
    "email": "Lucio_Hettinger@annie.ca",
}
const id = 5;
fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { // users/{id}
    method: 'PUT',
    body: JSON.stringify(user_),
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})
    .then(response => response.json())
    .then(result => console.log(result))