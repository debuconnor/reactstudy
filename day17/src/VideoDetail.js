import React from 'react';
import styles from './videodetail.module.css'
function VideoDetail({video}) {
  return <div>

<iframe   type="text/html" width="100%" height="500"
src={`https://www.youtube.com/embed/${video.id}`}
frameBorder="0" allowFullScreen title="youtubevideo"></iframe>
<h2>{video.snippet.title}</h2>
<h3>{video.snippet.channelTitle}</h3>
<pre className={styles.description}>{video.snippet.description}</pre>

  </div>;
}

export default VideoDetail;
