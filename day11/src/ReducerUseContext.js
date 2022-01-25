import React, { useContext, useReducer } from 'react'
import { IndexContext, initState, indexReducer } from './Store'

function TextButton() {
    const [state, dispatch] = useContext(IndexContext)
    return (
        <>
            <button onClick={() => dispatch({ type: 'applyKo' })}>KO</button>
            <button onClick={() => dispatch({ type: 'applyEn' })}>EN</button>
            <p>{state.text}</p>
        </>
    )
}

function CountButton() {
    const [state, dispatch] = useContext(IndexContext)

    return (
        <>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <p>{state.count}</p>
        </>
    )
}

function Box1() {
    return (
        <>
            <TextButton />
            <br />
            <CountButton />
        </>
    )
}

function ReducerUseContext() {
    return (
        <div>
            <IndexContext.Provider value={useReducer(indexReducer, initState)}>
                <Box1 />
            </IndexContext.Provider>
        </div>
    )
}

export default ReducerUseContext
