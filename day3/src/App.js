/*eslint-disable */
import React,{useState} from 'react'
//import './App.css';
import styled from 'styled-components';
import Header from './component/Header';
import Nav from './component/Nav';
import Article from './component/Article';

function App() {
  const [flag, setFlag] = useState(false)
  const [subject, setSubject] = useState([
    {title:'WEB', sub:'is a markup language for website'}
  ])
  const [list, setList] = useState([
    {id:1, item:'HTML'},
    {id:2, item:'CSS'},
    {id:3, item:'Javascript'},
  ])
  const [content, setContent] = useState([
    {title:'HTML', desc:'is a markup language for website'},
    {title:'CSS', desc:'is Cascading Style Sheet'},
    {title:'Javascript', desc:'is a script language'},
  ])
  
  return (
    <div className="App">
      <Header title={subject[0].title} sub={subject[0].sub} />
      <Nav data={list}/>
      <Article title={content[0].title} desc={content[0].desc} />
      <Article title={content[1].title} desc={content[1].desc} />
      <Article title={content[2].title} desc={content[2].desc} />
      
      <button onClick={() => { setFlag(!flag) }}>On/Off</button>
      {flag ? <SubPage /> : null}

    </div>
  );
}

function SubPage() {
  // using Styled
  const SubBoxAsObject = styled.div`
  background: #eee;
  padding: 20px;
  `

  return (
      <SubBoxAsObject>
          <h2>Sub page</h2>
          <div>Hello again</div>
      </SubBoxAsObject>
  )

  // without Styled
  /*
  const subBox = {
    background: '#eee',
    padding: '20px'
  }
  return(
    <div style={subBox}>
      <h2>Sub page</h2> 
      <div>Hello again</div>
    </div>
  )
  */
}

export default App;