import styles from './App.module.css';
import React,{useEffect,useState} from 'react'
import VideoList from './VideoList';
import SearchHeader from './SearchHeader';
import VideoDetail from './VideoDetail';
 
function App({youtube}) {
const [videos, setvideos] = useState([]);
 //--------------------------------------------------------------- 
 const [selectedVideo, setselectedVideo] = useState(null)
 const selectVideo = (video) => { setselectedVideo(video) }
 //--------------------------------------------------------------- 
 const search = (query) => {
  setselectedVideo(null)
   youtube.search(query) 
  .then(videos =>  setvideos(videos))
  };
 
 //--------------------------------------------------------------- 
useEffect(() => {
  youtube.mostPopular()
  .then(videos => setvideos(videos))
 }, [])
 //--------------------------------------------------------------- 

  return (<div className={styles.App}>
    <SearchHeader onSearch={search} video={selectedVideo}/>
    <section className={styles.content}>
    {selectedVideo&&<div className={styles.detail}>
      <VideoDetail video={selectedVideo}/>
     
      </div>}
      <div className={styles.lists}> <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo?'list':'grid'}/></div>
     </section>
    </div>
  );
}

export default App;
