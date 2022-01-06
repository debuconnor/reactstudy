import './App.css';
import React, { useState } from 'react'

function App() {
  const [input, setInput] = useState()

  return(
    <div className='App'>
      <p>input val: {input}</p>
      <input onChange={(e)=>{setInput(e.target.value)}}></input>
    </div>
  )
}

export default App;