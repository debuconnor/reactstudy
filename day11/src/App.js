import './App.css'
import React from 'react'
import UseStateHook from './UseStateHook'
import UseReducerHook from './UseReducerHook'

function App() {
  return (
    <div className='App'>
      <UseStateHook />
      <hr/>
      <UseReducerHook />
    </div>
  )
}

export default App
