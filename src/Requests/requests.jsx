import { key } from "./key";

export const getVideos = async (currentVideo) => {
    let params = {
        key: key,
        type: 'video',
        part: 'snippet',
        maxResults: '50',
        q: currentVideo
    };
    let query = Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
    let url = 'https://www.googleapis.com/youtube/v3/search?' + query;
    const response = await fetch(url)
    const videos = await response.json()
    return videos
}

export const makeAFlip = (event) => {
    const target = event.target;
    const parent = target.parentElement
    parent.parentElement.classList.toggle('flip')
}
