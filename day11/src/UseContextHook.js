import React, { createContext, useContext } from 'react'

const IndexContext = createContext();

function Box2(){
    const username = useContext(IndexContext);

    return(
        <div>
            <p>Box2</p>
            <p>Username: {username}</p>
        </div>
    )
}

function Box1(){
    const username = useContext(IndexContext);

    return(
        <div>
            <p>Box1</p>
            <p>Username: {username}</p>
        </div>
    )
}

function UseContextHook() {
    const username = 'connor';

    return (
        <div>
            <h2>UseContext</h2>
            <IndexContext.Provider value={username}>
                <Box1 />
                <Box2 />
            </IndexContext.Provider>
        </div>
    )
}

export default UseContextHook
