import React,{useReducer} from 'react';
import {initialState,indexReducer} from './store'
function UseReducerHook() {

 const [state, dispatch] = useReducer(indexReducer, initialState)
  return <div>
    <h2>UseReducer</h2>
    <hr />
    <button onClick={()=>dispatch({type:'chagetoKor'})}>한글</button>
    <button onClick={()=>dispatch({type:'chagetoEng'})}>영어</button>
    <div>{state.text}</div>
    <button onClick={()=>dispatch({type:'inCrement'})}>+</button>
    <button onClick={()=>dispatch({type:'deCrement'})}>-</button>
    <div>{state.count}</div>

  </div>;
}

export default UseReducerHook;
