import React, { useState } from "react";
import Child from "./Child";

function Parents(){
   const [number, setNumber] = useState(0);

   const getData = (number) => {
      setNumber(number);
   };
   
   return(
      <div>
         <p>Parent.js sends var and func to the child.</p>
         <p>set val from child. val: {number}</p>
         <Child number={number} getData={getData} />
      </div>
   )
}

export default Parents;