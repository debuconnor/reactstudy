/* 자식 요소 선택하기 */
const sectElem = document.getElementById('sect')
const articles = sectElem.children;

console.log('article',articles);
console.log('articles[0]',articles[0]);
console.log('-------------------------------------------')
/* 부모 요소 선택하기 */
const list1 = document.querySelector(".list");
console.log(list1.parentElement);
console.log('-------------------------------------------')
 /* 제일 가까운 상위 부모 요소 선택하기 */
const li = document.querySelector("li");
console.log('li.closest("article")',li.closest("article"))
/* 형제 요소 선택하기 */
console.log('-------------------------------------------')
const item3 = document.querySelector(".item3");
console.log(item3.previousElementSibling);
console.log(item3.nextElementSibling);
/* 요소를 여러 개 선택하기*/
console.log('-------------------------------------------')
const liElems = document.querySelectorAll("li");

for(let item of liElems) {
  console.log('for-of:',item);
}
for(let i=0; i<liElems.length; i++){
  console.log('for:',i,liElems[i]);
}