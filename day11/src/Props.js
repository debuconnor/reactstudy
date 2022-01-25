import React from 'react'

function Box2(props){
    return(
        <div>
            <p>Box2</p>
            <p>Username: {props.name}</p>
        </div>
    )
}

function Box1(props){
    return(
        <div>
            <p>Box1</p>
            <Box2 name={props.name} />
        </div>
    )
}

function Props() {
    const username = 'connor';

    return (
        <div>
            <h2>Props</h2>
            <Box1 name={username} />
        </div>
    )
}

export default Props
