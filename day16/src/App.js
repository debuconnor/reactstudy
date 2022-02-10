import styles from './App.module.css';
import React,{useEffect,useState} from 'react'
import VideoList from './VideoList';
import SearchHeader from './SearchHeader';
 
function App() {
const [videos, setvideos] = useState([]);
 //--------------------------------------------------------------- 
 const search = (query) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=${query}&key=AIzaSyAujeW1iG60DqZ9CpyJUX0xRg3srgaVw8g`, requestOptions)
    .then(response => response.json())
    .then(result => result.items.map(item=>({...item,id:item.id.videoId})))
    .then(items =>  setvideos(items))
    .catch(error => console.log('error', error));
 };
 
 //--------------------------------------------------------------- 
useEffect(() => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyAujeW1iG60DqZ9CpyJUX0xRg3srgaVw8g", requestOptions)
    .then(response => response.json())
    .then(result => setvideos(result.items))
    .catch(error => console.log('error', error));
}, [])
 //--------------------------------------------------------------- 

  return (<div className={styles.App}>
    <SearchHeader onSearch={search}/>
    <VideoList videos={videos}/>
    </div>
  );
}

export default App;
