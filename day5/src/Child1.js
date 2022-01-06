import React, { useState } from "react";

/*
   This Child1 gets values from Parent1
   POV: The values not changed after reloading
*/
function Child1(props) {
   
   return(
      <div>
         <p>Child1 loaded</p>
         <p>{props.number}</p>
      </div>
   )
}

export default Child1;
