import React from 'react'
import { useHistory } from 'react-router-dom'

function Start() {
    const history = useHistory();

    return (
        <div className='quiz'>
            <h2>Quiz</h2>
            <button onClick={()=>{
                history.push('/quiz')
            }}>Start</button>
        </div>
    )
}

export default Start
