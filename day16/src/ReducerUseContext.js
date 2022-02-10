import React, {useReducer, useContext } from 'react';
import {
  IndexContext,
  initialState,
  indexReducer,
} from './store'

function CountButton() {
  const [state, dispatch] = useContext(IndexContext)
  return (
    <>
      <button onClick={() => dispatch({ type: 'inCrement' })}>+</button>
      <button onClick={() => dispatch({ type: 'deCrement' })}>-</button>
      <div>{state.count}</div>
    </>
  )
}
function TextButton() {
  const [state, dispatch] = useContext(IndexContext)
  return (
    <>
      <button onClick={() => dispatch({ type: 'chagetoKor' })}>한글</button>
      <button onClick={() => dispatch({ type: 'chagetoEng' })}>영어</button>
      <div>{state.text}</div>
    </>
  )
}

function Box1() {
  return (
    <>
      <TextButton />
      <CountButton />

    </>
  )


}

function ReducerUseContext() {
  return <div>
    <IndexContext.Provider value={useReducer(indexReducer, initialState)}>
      <Box1 />
    </IndexContext.Provider>

  </div>;
}

export default ReducerUseContext;
