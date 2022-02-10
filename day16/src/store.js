import {createContext} from 'react'
export const IndexContext=createContext()

export const  initialState={
  text:'인사말',
  count:0
}

export const indexReducer=(state,action)=>{
switch(action.type){
  case "chagetoKor":{
    return{
       ...state,
       text:'안녕'
    } 
  }
  case "chagetoEng":{
    return{
       ...state,
       text:'Hello'
    } 
  }
  case "inCrement":{
    return{
       ...state,
       count:state.count+1
    } 
  }
  case "deCrement":{
    return{
       ...state,
       count:state.count-1
    } 
  }
}

}