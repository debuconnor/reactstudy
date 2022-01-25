import React, { useState } from 'react'

function UseStateHook() {
    const [text, setText] = useState('-')
    const [count, setCount] = useState(0)

    const applyKo = () => {
        setText('안녕하세요')
    }

    const applyEn = () => {
        setText('Hello')
    }

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    
    
    
    
    return (
        <div>
            <h2>UseState</h2>
            <button onClick={applyKo}>KO</button>
            <button onClick={applyEn}>EN</button>
            <div>{text}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <div>{count}</div>
        </div>
    )
}

export default UseStateHook
