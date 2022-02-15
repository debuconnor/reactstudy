import React, { useState } from 'react'
import ReviewList from './ReviewList'
import mockItems from '../db/mock.json'
import './App.css'
function App() {
  const [items, setItems] = useState(mockItems)
  const [order, setOrder] = useState('createdAt')
  const sortedItems = items.sort((a, b) => b[order] - a[order])
  const handleNewClick = () => setOrder('createdAt')
  const handleBestClick = () => setOrder('rating')

  const handleDelete = (id) => {
    const filterred = items.filter((item) => id !== item.id);
    setItems(filterred);
  }

  return (
    <div>
      <button onClick={handleNewClick}>최신순</button>
      <button onClick={handleBestClick}>베스트순</button>
      <ReviewList items={sortedItems} onDelete={handleDelete}/>
    </div>
  )
}

export default App