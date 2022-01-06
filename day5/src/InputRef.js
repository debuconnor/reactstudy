import React, { useRef, useEffect } from 'react'

function InputRef() {
   const inputRef = useRef();

   console.log('Rendering -')

   useEffect(()=>{
      console.log('Called useEffect.')
   })

   const login = () => {
      alert(`Welcome ${inputRef.current.value}!`);
      inputRef.current.focus();
   }
   

   return (
      <div>
         <input ref={inputRef} placeholder="username" />
         <button onClick={login}>submit</button>
      </div>
   )
}

export default InputRef;