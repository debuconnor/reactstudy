import React from 'react'

function InputBox({ refresh }) {
  const url = "http://localhost:3001/todo";
  const addList = (e) => {
    if (e.key === 'Enter') {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: Math.floor(Math.random() * 10000000),
          content: document.getElementById("input").value,
          checked: false
        })
      })
        .then(refresh());
    }
  }

  return (
    <div className='container'>
      <input id='input' type='input' placeholder='What to do?...' onKeyDown={addList} />
    </div>
  )
}

export default InputBox