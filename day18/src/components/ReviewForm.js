import React,{useState} from 'react'
import FileInput from './FileInput';
import './reviewForm.css'
function ReviewForm() {
  
  const [values,setValues] = useState({
    title:'',
    rating:0,
    content:'',
    imgFile:null
  })
 
  const handleChange = (name,value) => { 
    setValues((values)=>({
       ...values,[name]:value
    }))
  }
  
  const handleInputChange = (e) => { 
    const{name,value}= e.target;
    handleChange(name,value)
  
   }
 
   const handleSubmit = (e) => { 
     e.preventDefault()
      console.log(values)
   }


  return (
    <form className='reviewForm' onSubmit={handleSubmit}>
      <FileInput name="imgFile"
      value={values.imgFile}
      onChange={handleChange}
      />
      <input name='title' value={values.title}  onChange={handleInputChange}/>
      <input name='rating' value={values.rating} type="number" onChange={handleInputChange}/>
      <textarea name='content'  value={values.content} onChange={handleInputChange}/>
      <button type='submit'>확인</button>
    </form>
  )
}

export default ReviewForm