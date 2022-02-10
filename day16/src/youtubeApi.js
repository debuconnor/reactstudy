class YoutubeApi {
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    mostPopular() {
        return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${this.key}`
            , this.requestOptions)
            .then(response => response.json())
            .then(result => result.items)
    }

    search(query) {
        return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=${query}&key=${this.key}`
            , this.requestOptions)
            .then(response => response.json())
            .then(result => result.items.map(item => ({ ...item, id: item.id.videoId })))
    }
}

export default YoutubeApi;