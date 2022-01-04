/*eslint-disable */
import React,{useState} from 'react'
import './App.css';

function App() {
//  let title="React~~"
// let useTitle=useState('초기제목')
// console.log(useTitle)
// let title=useTitle[0]
// let setTitle=useTitle[1]
// const [title, setTitle] = useState('초기데이터')
const [title, setTitle] = useState(['list1','list2','list3'])
 
  return (
    <div className="App">
    
         {
           title.map(function(title,idx){
            return(
              <div className="title" key={idx}>Title:{title}[{idx}]</div>
            )
           })
         }
        
         {/* <button onClick={function(){}}>버튼을 클릭하세요?</button> */}
         {/* <button onClick={()=>{setTitle('변경된제목')}}>버튼을 클릭하세요?</button> */}
       
       
     
        <h2>
          허쌤^^
        </h2>
    </div>
  );
}

function SubPage(){

}
export default App;