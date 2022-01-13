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
    const [number, setNumber] = useState(props.initNumber);
    const [date, setDate] = useState(new Date().toString())

    const setRandom = () => {
        setNumber(Math.floor(Math.random() * 10));
    }

    const showDate = () => {
        setDate(new Date().toString())
    }
    
    return(
        <div className="container">
            <h2>Function Component</h2>
            <p>Number: {number} </p>
            <p>Date: {date}</p>
            <button onClick={setRandom}>Random</button>
            <button onClick={() => {showDate(); setRandom();}}>Refresh</button>
        </div>
    )
}

class ClassComp extends React.Component{
    state={
        number: this.props.initNumber,
        date: (new Date()).toString()
    }
    
    render(){
        return(
            <div className="container">
                <h2>Class Component</h2>
            <p>Number: {this.state.number} </p>
            <p>Date: {this.state.date} </p>
            <p>test: {this.test.a}</p>
            <button onClick={function(){
                this.setState({
                    number:Math.floor(Math.random() * 10)
                    })
                }.bind(this)}>Random</button>
            <button onClick={function(){
                this.setState({
                    number:Math.floor(Math.random() * 10),
                    date: (new Date()).toString()
                })
            }.bind(this)}>Refresh</button>
            </div>
        )
    }
}

export default LifeCycle;