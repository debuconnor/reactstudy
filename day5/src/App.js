import './App.css';
import React, { useState } from 'react'

function App() {
  function showName() {
    console.log('showName called')
  }

  function showAge(age) {
    console.log(age);
  }

  function showText(text) {
    console.log(text)
  }

  return(
    <div className='App'>
      <button onClick={showName}>Show Name</button>
      <button onClick={()=>{showAge(30)}}>Show Age</button>
      <input type="text" onChange={(e)=>{
        const t = e.target.value
        showText(t);
      }} />
    </div>
  )
}

export default App;