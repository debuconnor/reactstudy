import React from 'react';
import './App.css';
import UseFetch from './modules/common/UseFetch';
import Header from './modules/header/Header';
import ListBox from './modules/list/ListBox';

function App() {
  const url = "http://localhost:3001/todo";
  const lists = UseFetch(url);

  const refresh = () => {
    window.location.reload();
  }
  
  return (
    <div className="App">
      <Header refresh={refresh} />
      <ListBox value={lists} />
    </div>
  );
}

export default App;
