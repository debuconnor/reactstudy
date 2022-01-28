import React, { useState } from 'react';
import UseFetch from './UseFetch';

function Word({ word:w }) {
    const [word, setWords] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    const toggleShow = () => {
        setIsShow(!isShow)
    };
    const toggleIsDone = () => {
        fetch(`http://localhost:3000/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...word, 
                isDone: !isDone
            })
        })
        .then(setIsDone(!isDone))
    };

    const del = () => {
      if(window.confirm("Delete the row?")){
        fetch(`http://localhost:3000/words/${word.id}`,{
            method: "DELETE"
        })
        .then(setWords({...w, id:0}))
      }
    };

    if(word.id === 0){
        return null;
    }

    return <>
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleIsDone} />
            </td>
            <td style={{ width: "20%" }}>{word.syntax}</td>
            <td style={{ width: "60%" }}>{isShow && word.func}</td>
            <td>
                <button onClick={toggleShow}>{isShow ? "Hide" : "Show"}</button>
                <button onClick={del}>Delete</button>
            </td>
        </tr>
    </>;
}

export default Word;
