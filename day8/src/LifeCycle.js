import React, { useState, useEffect } from "react";

function LifeCycle(){
    const [funcCompFlag, setFuncCompFlag] = useState(true);
    const [classCompFlag, setClassCompFlag] = useState(true);

    return(
        <div className="container">
            <h1>React LifeCycle</h1>
            <button onClick={()=>{setFuncCompFlag(!funcCompFlag)}}>Function Component</button>
            <button onClick={()=>{setClassCompFlag(!classCompFlag)}}>Class Component</button>
            
            {funcCompFlag ? <FuncComp initNumber={1} /> : null}
            {classCompFlag ? <ClassComp initNumber={2} /> : null}
        </div>
    )
}

let red = 'color:red';

function FuncComp(props){
    const [number, setNumber] = useState(props.initNumber);
    const [date, setDate] = useState(new Date().toString());

    const setRandom = () => {
        setNumber(Math.floor(Math.random() * 10));
    }

    const showDate = () => {
        setDate(new Date().toString())
    }

    useEffect(() => {
        console.log('%c called in useEffect', red)
        return () => {}
    }, [])

    useEffect(() => {
        console.log('%c Number[componentDidMount, componentDidUpdate]', red)
    }, [number])

    useEffect(() => {
        console.log('%c Date[componentDidMount, componentDidUpdate]', red)
    }, [date])
    
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
    constructor(props){
        super(props);
        this.state={
            number: this.props.initNumber,
            date: (new Date()).toString()
        }
    }

    componentWillMount(){
        console.log('componentWillMount called.');
    }

    componentDidMount(){
        console.log('componentDidMount called.');
    }

    shouldComponentUpdate(nextPros, nextState){
        console.log('componentDidMount called.')
        return true;
    }

    componentWillUpdate(nextPros, nextState){
        console.log('componentWillUpdate called.')
    }

    componentDidUpdate(nextPros, nextState){
        console.log('componentDidUpdate called.')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount called.')
    }
    
    render(){
        return(
            <div className="container">
                <h2>Class Component</h2>
            <p>Number: {this.state.number} </p>
            <p>Date: {this.state.date} </p>
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