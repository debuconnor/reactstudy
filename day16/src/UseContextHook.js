import React,{createContext,useContext} from 'react';
const IndexContext=createContext()

function Box2(){
  const userName=useContext(IndexContext)
  return(
    <div>
      <p> Box2 에서 출력 User Name : {userName}</p>
    </div>
  )
}
function Box1(){
  const userName=useContext(IndexContext)
  return(
    <div>
     <p>Box1에서 출력: {userName}</p>
     <Box2/>  
     </div>
  )
}

function UseContextHook() {
  const userName='point'
  return <div>
    <h2>UseContext</h2>
    <hr />
    <IndexContext.Provider value={userName}>
        <Box1/>
    </IndexContext.Provider>
  </div>;
}

export default UseContextHook;
