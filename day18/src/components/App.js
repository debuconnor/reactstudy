import React,{useState} from 'react'
import ReviewList from './ReviewList'
import items from '../db/mock.json'
import './App.css'
function App() {
  const [order, setOrder] = useState('createdAt')
  const sortedItems=items.sort((a,b)=>b[order]-a[order])
  const handleNewClick = () =>setOrder('createdAt')
  const handleBestClick = () =>setOrder('rating')
  return (
    <div>
      <button onClick={handleNewClick}>최신순</button>
      <button onClick={handleBestClick}>베스트순</button>
      <ReviewList items={sortedItems}/>
    </div>
  )
}

export default App