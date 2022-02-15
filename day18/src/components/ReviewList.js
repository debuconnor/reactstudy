import React from 'react'
import './reviewListItem.css'
const formatDate = (value) => { 
  const date=new Date(value)
  return `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`
 }

function ReviewListItem({list}) {
   return (
    <div>
    <section className='reviewListItem'>
      <img src={list.imgUrl} className='reviewListItem-img' alt={list.title}/>
      <div>
        <h2>{list.title}</h2>
        <p>{list.rating}</p>
        <p>{formatDate(list.createdAt)}</p>
        <p>{list.content}</p>
      </div>
    </section>
    </div>
  )
}

// ----------------------------------
function ReviewList({items}) {
  console.log(items)
  return (
    <ul>{
     items.map(list=>( <li><ReviewListItem list={list}/></li>)) 
      }
    </ul>
  )
}

export default ReviewList