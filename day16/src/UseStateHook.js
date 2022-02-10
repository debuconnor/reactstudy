import React, { useState } from 'react';

function UseStateHook() {
  const [text, settext] = useState('인사말')
  const [count, setcount] = useState(0)

 const changeKor = () => {
  settext('안녕하세요')
 }
 const changeEng = () => {
  settext('Hello~')
 }
 
 const inCrement = () => {
   setcount(count+1)
 }
 const deCrement = () => {
  setcount(count-1)
 }
 
  return <div>
    <h2>UseState</h2>
    <hr />
    <button onClick={changeKor}>한글</button>
    <button onClick={changeEng}>영어</button>
    <div>{text}</div>
    <button onClick={inCrement}>+</button>
    <button onClick={deCrement}>-</button>
    <div>{count}</div>


  </div>;
}

export default UseStateHook;
