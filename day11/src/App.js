import './App.css'
import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Start from './Start'
import Quiz from './Quiz'
import Score from './Score'

function App() {
  const [name, setname] = useState('건강상식')

  return (
    <div className='App'>
      <Route path='/' exact>
        <Start name={name} />
      </Route>
      <Route path='/quiz'>
        <Quiz />
      </Route>
      <Route path='/score'>
        <Score />
      </Route>
    </div>
  )
}

export default App
