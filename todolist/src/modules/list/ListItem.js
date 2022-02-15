import React, { useState } from 'react'

function ListItem({ className, list: v }) {
    const url = "http://localhost:3001/todo/";
    const [list, setList] = useState(v);
    const [checked, setChecked] = useState(list.checked)
    const toggleChecked = () => {
        fetch(url + list.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...list,
                checked: !checked
            })
        })
            .then(setChecked(!checked));
    }
    const deleteList = () => {
        if (window.confirm("Delete the list?")) {
            fetch(`http://localhost:3001/todo/${list.id}`, {
                method: "DELETE"
            })
                .then(setList({ ...list, id: 0 }))
        }
    };

    if (list.id === 0) return null;

    return (
        <li key={list.id}
            className={className}
            data-checked={checked}
            onClick={toggleChecked}
            onDoubleClick={deleteList}>
            {list.content}
        </li>
    )
}


export default ListItem