import React, { useState } from 'react';
import Dice from "./Dice";

function Player({ color, num, diceNum, total, history}) {
    return (
        <div className="player" >
            <h2>Player{num} Score: {total}</h2>
            {
                color ? (num ? <Dice color={color} num={diceNum} /> : <Dice />) : <Dice />
                // <Dice color={null} num={null} /> ====> won't initialize default values.
                // To init you do not set attributes. 
            }
            <p>{history.join(' ')}</p>
        </div>
    )
}

export default Player
