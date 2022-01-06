import React, { useState } from "react";
import Child1 from "./Child1";

/*
   This Parent1 save values. Also prevents changing values after rendering Childs
*/
function Parent1() {
   const [n, setNumber] = useState(0);
   const onClick = () => {
      setNumber(n + 1)
   }
   
   return(
      <div>
         <Child1 number={n} />
         <button onClick={onClick}>Num++</button>
      </div>
   )
}

export default Parent1;
