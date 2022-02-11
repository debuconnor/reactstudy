import React from 'react';

function Box2(props){
  return(
    <div>
      <p> Box2 에서 출력 User Name : {props.name}</p>
    </div>
  )
}
function Box1(props){
  return(
    <div>
     <Box2 name={props.name}/>  
     </div>
  )
}
function Props() {
  const userName = 'point'
  return <div>
    <h2>Props</h2>
    <hr />
    <Box1 name={userName}/>
  </div>;
}

export default Props;
