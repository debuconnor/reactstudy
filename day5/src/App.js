import './App.css';
import React, { useState, useRef } from 'react'

function App() {
  const [names, setNames] = useState({
    username: '',
    nickname: ''
  });

  const { username, nickname } = names;
  const inputRef = useRef();

  const onChange = (e) => {
    const {value, name} = e.target;
    console.log(name, value);
    setNames({
      ...names, [name]:value
    });
  }
  const clearNames = () => {
    setNames({
      username: '',
      nickname: ''
    })
  }
  

  return (
    <div className='App'>
      <input name="username" placeholder="username" onChange={onChange} value={username} ref={inputRef} />
      <input name="nickname" placeholder="nickname" onChange={onChange} value={nickname} />
      <button onClick={clearNames}>Clear</button>
      <div>{username} ({nickname})</div>
    </div>
  )
}

export default App;