import styles from './App.module.css';
import React,{useCallback, useEffect,useState} from 'react'
import VideoList from './VideoList';
import SearchHeader from './SearchHeader';
import VideoDetail from './VideoDetail';
 
function App({youtube}) {
const [videos, setvideos] = useState([]);
 //--------------------------------------------------------------- 
 const [selectedVideo, setselectedVideo] = useState(null)
 const selectVideo = (video) => { setselectedVideo(video) }
 //--------------------------------------------------------------- 
 const search = useCallback((query) => {
  setselectedVideo(null)
   youtube.search(query) 
  .then(videos =>  setvideos(videos))
  },[youtube]);
 
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
