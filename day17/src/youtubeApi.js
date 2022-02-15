import axios from 'axios'

class Youtube{
  constructor(httpClinet){
    this.youtube=httpClinet
  }
// -------------------------------------
  async mostPopular(){
  const response = await this.youtube.get('videos',{
   params:{
     part:'snippet',
     chart:'mostPopular',
     maxResults:25
   }
 })
 return response.data.items;
}

// -------------------------------------

  async search(query){
    const response = await this.youtube.get('search',{
      params:{
        part:'snippet',
        type:'video',
        maxResults:25,
        q:query
      }
    })
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }))
  }
}
export default Youtube