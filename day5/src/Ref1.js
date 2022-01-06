import React, { useState, useRef } from 'react'

function Ref1() {
   let v = 0;
   const [count, setCount] = useState(0);
   const countRef = useRef(0);

   console.log('fucntion called');

   const increaseVar = (params) =>{
      console.log(++v);
   }

   const increaseState = (params) =>{
      setCount(count + 1);
      console.log(count);
   }
   
   const increaseRef = (params) =>{
      console.log(++countRef.current);
   }

   return (
      <div className="App">
         <p>Var:{v}</p>
         <p>State:{count}</p>
         <p>Ref:{countRef.current}</p>

         <button onClick={increaseVar}>Var+</button>
         <button onClick={increaseState}>State+</button>
         <button onClick={increaseRef}>Ref+</button>
      </div>
   );
}

export default Ref1;