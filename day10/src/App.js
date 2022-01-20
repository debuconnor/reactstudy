import React from 'react'
import { Route, Switch, } from 'react-router-dom'
import Graphics from './Graphics'
import Home from './Home'
import NotFound from './NotFound'
import Web from './Web'

function App() {
  return (
    <div className='App'>
      <h1>React Router Dom</h1>
      <hr />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/web'>
          <Web />
        </Route>
        <Route path='/graphic'>
          <Graphics />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
