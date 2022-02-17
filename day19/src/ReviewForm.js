import React,{useState} from 'react'
import {createReviews} from '../fetch'
import FileInput from './FileInput'
import RatingInput from './RatingInput'

const INITIAL_VALUES={
title:'',
rating:0,
content:'',
imgFile:null
}
function ReviewForm() {
const [values, setValues] = useState(INITIAL_VALUES)

const handleChange = (name,value) => { 
  setValues((prevValues)=>({
    ...prevValues,[name]:value
  }))
 }
const handleInputChange = (e) => { 

  const {name,value}=e.target;
  handleChange(name,value)
 }


const handleSubmit = async(e) => { 
  e.preventDefault()
  const formData = {
    "title": values.title,
    "rating": values.rating,
    "content": values.content,
    "imgUrl": values.imgFile,
    "createdAt": new Date(),
    "updatedAt": new Date()
  }
  await createReviews(formData)
  setValues(INITIAL_VALUES)
 }



  return (
    <form className='reviewForm' onSubmit={handleSubmit}>
    <FileInput name="imgFile"
    value={values.imgFile}
    onChange={handleChange}/>
    <input name='title' value={values.title}  onChange={handleInputChange}/>
    <RatingInput name="rating" value={values.rating} onChange={handleChange}/>
    <textarea name='content'  value={values.content} onChange={handleInputChange}/>
    <button type='submit'>확인</button>
  </form>
  )
}

export default ReviewForm