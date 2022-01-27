function fetchPrint(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{console.log('7'); return response.text();})
    .then(result=>console.log(result))
}
console.log(1);
fetchPrint();
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);