import React from 'react'
import { useHistory } from 'react-router-dom'

function NotFound() {
    const history = useHistory();
    
    return (
        <div>
            <h2 onClick={() => { history.push('/') }}>Wrong Path Requested</h2>
        </div>
    )
}

export default NotFound
