import React from 'react';
import styles from './videoItem.module.css'
function VideoItem({ video: { snippet } }) {
  return <>
    <li className={styles.container}>
      <div className={styles.video}>
        <img className={styles.img} src={snippet.thumbnails.medium.url} alt="videothumbnail"></img>
     
      <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
     </div>
    </li>
  </>;
}

export default VideoItem;
