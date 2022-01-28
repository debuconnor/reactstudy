import './App.css'
import React from 'react'
import Header from './Header'
import DayList from './DayList'
import Day from './Day';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Header />
      <DayList />
      <Route path='/day/:day'>
        <Day />
      </Route>
    </div>
  )
}

export default App
