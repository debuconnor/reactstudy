import React, { useEffect, useState } from 'react';
import SearchHeader from './SearchHeader';
import VideoList from './VideoList';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular*maxResults=20&key=AIzaSyAujeW1iG60DqZ9CpyJUX0xRg3srgaVw8g", requestOptions)
    .then(response => response.json())
    .then(result => setVideos(result.items))
    .catch(error => console.log('error', error))
  }, []);
  
  return <div>
    <SearchHeader />
    <VideoList videos={videos} />
  </div>;
}

export default App;
