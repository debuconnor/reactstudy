import React from 'react'
import { useParams } from 'react-router-dom'

function Graphics(props) {
    const subject = useParams;
    console.log(subject)
    return (
        <div>
            <h2>Graphic Work</h2>
            <hr />
        </div>
    )
}

export default Graphics
