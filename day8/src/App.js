import React, { useState } from "react";
import './App.css';
import Player from "./Player";
import Button from "./Button";

function App() {
  const [diceNum1, setDice1Num] = useState(1);
  const [total1, setTotal1] = useState(0);
  const [history1, setHistory1] = useState([]);

  const [diceNum2, setDice2Num] = useState(1);
  const [total2, setTotal2] = useState(0);
  const [history2, setHistory2] = useState([]);
  const [turn, setTurn] = useState(1);

  function random(n) {
    return Math.ceil(Math.random() * n);
  }

  function changeTurn(){
    if(turn === 1){
      setTurn(2);
    }else{
      setTurn(1);
    }
  }

  const handleRollClick = () => {
    const nextNum = random(6);
    switch(turn){
      case 1:
        setDice1Num(nextNum);
        setTotal1(total1 + nextNum);
        setHistory1([nextNum, ...history1]);
      break;

      case 2:
        setDice2Num(nextNum);
        setTotal2(total2 + nextNum);
        setHistory2([nextNum, ...history2]);
      break;
    }

    changeTurn();
  }

  const handleClearClick = () => {
    setDice1Num(1);
    setDice2Num(1);
    setTotal1(0);
    setTotal2(0);
  }

  return (
    <div>
      <Button onClick={handleRollClick}>Roll</Button>
      <Button onClick={handleClearClick}>Clear</Button>
      <Player color="red" num="1" total={total1} diceNum={diceNum1} history={history1} />
      <Player color="blue" num="2" total={total2} diceNum={diceNum2} history={history2} />
    </div>
  )
}

export default App;