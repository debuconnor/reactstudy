import React, { useState } from "react";

function LifeCycle(){
    return(
        <div className="container">
            <h1>React LifeCycle</h1>
            <FuncComp initNumber={1} />
            <ClassComp initNumber={2} />
        </div>
    )
}

function FuncComp(props){
    const [number, setNumber] = useState(1);

    return(
        <div className="container">
            <h2>Function Component</h2>
            <p>Number: {props.initNumber} </p>
        </div>
    )
}

class ClassComp extends React.Component{
    render(){
        return(
            <div className="container">
                <h2>Class Component</h2>
            <p>Number: {this.props.initNumber} </p>
            </div>
        )
    }
}

export default LifeCycle;