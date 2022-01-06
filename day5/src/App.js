import './App.css';
import React, { useState } from 'react'

function App() {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value);
  }

  const clearText = (e) =>{
    setText('')
  }

  return (
    <div className='App'>
      <input onChange={onChange} value={text} />
      <button onClick={clearText}>clear</button>
      <div>val: {text}</div>
    </div>
  )
}

export default App;