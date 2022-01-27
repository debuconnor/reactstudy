import './App.css'
import React from 'react'
import { NavLink, Route, Switch, } from 'react-router-dom'
import Start from './Start'
import Quiz from './Quiz'
import NotFound from './NotFound'
import Score from './Score'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <Start />
        </Route>
        <Route path='/quiz'>
          <Quiz />
        </Route>
        <Route path='/score' >
          <Score />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App
