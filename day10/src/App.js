import React from 'react'
import { Route, } from 'react-router-dom'
import Graphics from './Graphics'
import Home from './Home'
import Web from './Web'

function App() {
  return (
    <div className='App'>
      <h1>React Router Dom</h1>
      <hr />
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/web'>
        <Web />
      </Route>
      <Route path='/graphic'>
        <Graphics />
      </Route>

    </div>
  )
}

export default App
