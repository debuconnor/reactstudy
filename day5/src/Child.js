import React from "react";

function Child({number, getData}){

   const onClick = () => {
      getData(number + 1);
   }
   
   return(
      <div>
         <button onClick={onClick}>+</button>
      </div>
   )
}

export default Child;