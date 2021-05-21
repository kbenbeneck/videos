import axios from 'axios';

const KEY = 'AIzaSyC8QBeOYSM3FUHpC2b69bbzkY78GyvdGQM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: KEY

    }
});