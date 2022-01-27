import React from 'react'
import { useHistory } from 'react-router-dom'

function Start() {
    const history = useHistory();

    return (
        <div>
            <h1>Quiz !</h1>
            <button onClick={()=>history.push('/quiz')}>Start</button>
        </div>
    )
}

export default Start
