async function fetchPrint(){
    console.log(2);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(7);
    const result=await response.text()
    .then(result=>console.log(result))
}
console.log(1);
console.log(3);
fetchPrint();
console.log(4);
console.log(5);
console.log(6);