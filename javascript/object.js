{
   console.log('변수---------------------------------')
   let customer_1_name = '박지민';
   let customer_1_age = 26;
   let customer_2_name = '김태형';
   let customer_2_age = 25;
   console.log('객체--------------------------------')
   let customer_1 = { 'name': '민윤기', 'age': 28 }
   let customer_2 = { 'name': '전정국', 'age': 24 }
   console.log('배열[객체]--------------------------------')
   let customer = [
     { 'name': '민윤기', 'age': 28 },
     { 'name': '전정국', 'age': 24 }
   ]
   console.log('-------------------------')
 }
 {
   let name = '민윤기';
   let job = 'singer';

   let user = {
     name: name,
     job: job
   }
   console.log(user)
 }

 console.log('destructuring-------------------------')
 {
   let name = '민윤기';
   let job = 'singer';

   let user = {
     name,
     job
   }
   console.log(user)
 }
 console.log('배열 ES6-----------------')
 let x, y, z;
 // [x,y]=[1,2]
 // console.log('x,y:',x,y)
 // [x,y]=[1]
 // console.log('x,y:',x,y)

 // [x,y,z=3]=[1,2]
 //  console.log('x,y,z:',x,y,z)
 [x, ...y] = [1, 2, 3]
 console.log(x, y)
 console.log('객체 ES6-----------------')
 const obj = {
   name: '민윤기',
   job: 'singer'
 }

 const { name, job } = obj
 console.log(name, job)
 console.log('obj.name:', obj.name)
 console.log('obj[job]:', obj['job'])

 function margin(){
   const left=1,right=2,top=3,bottom=4;
   return{left,right,top,bottom}
 }
 const {left,bottom}=margin()
 console.log('left,bottom:',left,bottom)

 function settings(){
     return{display:{color:'red'},keyboard:{layout:'qwerty'}}
 }
 const{display:{color:displayColor},keyboard:{layout:keyboardLayout}}=settings()
 console.log(displayColor,keyboardLayout)
 
 console.log('객체 ES6 축약-----------------')
 ary=[1];
 [test]=ary;
 console.log('test:',test)
let obj4={props:1};
 ({props}=obj4);
 console.log('props:',props)