import React, { useReducer } from 'react'

function UseReducerHook() {
    const initState = {
        text: '-',
        count: 0
    }

    const indexReducer = (state, action) => {
        switch (action.type) {
            case 'applyKo':
                return { ...state, text: '안녕하세요' }
            case 'applyEn':
                return { ...state, text: 'Hello' }
            case 'increment':
                return { ...state, count: state.count + 1 }
            case 'decrement':
                return { ...state, count: state.count - 1 }
        }
    }

    const [state, dispatch] = useReducer(indexReducer, initState)

    return (
        <div>
            <h2>UseReducer</h2>
            <button onClick={()=>dispatch({type:'applyKo'})}>KO</button>
            <button onClick={()=>dispatch({type:'applyEn'})}>EN</button>
            <div>{state.text}</div>
            <button onClick={()=>dispatch({type:'increment'})}>+</button>
            <button onClick={()=>dispatch({type:'decrement'})}>-</button>
            <div>{state.count}</div>
        </div>
    )
}

export default UseReducerHook
