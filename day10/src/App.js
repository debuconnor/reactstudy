import './App.css'
import React from 'react'
import { NavLink, Route, Switch, } from 'react-router-dom'
import Graphics from './Graphics'
import Home from './Home'
import NotFound from './NotFound'
import Web from './Web'

function App() {
  return (
    <div className='App'>
      <h1>React Router Dom</h1>
      <ul>
        <li><NavLink to='/' exact>Home</NavLink></li>
        <li><NavLink to='/web'>Web</NavLink></li>
        <li><NavLink to='/graphic'>Graphics</NavLink></li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/web'>
          <Web />
        </Route>
        <Route path='/graphic/:subject' component={Graphics}>
          {/* <Graphics /> */}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
