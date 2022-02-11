import React from 'react';
import VideoItem from './VideoItem';
import styles from './videoList.module.css'
function VideoList({videos,onVideoClick,display}) {
  return <div>
    <ul className={styles.videos}>
      {videos.map((video)=>(
        <VideoItem video={video} key={video.id} onVideoClick={onVideoClick} display={display}/>
      ))}
    </ul>

  </div>;
}

export default VideoList;
