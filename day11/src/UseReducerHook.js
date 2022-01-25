import React, { useReducer } from 'react'
import {initState, indexReducer} from './Store'

function UseReducerHook() {
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
