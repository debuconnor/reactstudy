import styles from './App.module.css';
import React,{useEffect,useState} from 'react'
import VideoList from './VideoList';
import SearchHeader from './SearchHeader';
 
function App({youtube}) {
const [videos, setvideos] = useState([]);
 //--------------------------------------------------------------- 
 const search = (query) => {
    youtube.search(query)
    .then(videos =>  setvideos(videos));
 };
 
 //--------------------------------------------------------------- 
useEffect(() => {
  youtube.mostPopular()
    .then(videos => setvideos(videos))
}, [])
 //--------------------------------------------------------------- 

  return (<div className={styles.App}>
    <SearchHeader onSearch={search}/>
    <VideoList videos={videos}/>
    </div>
  );
}

export default App;
