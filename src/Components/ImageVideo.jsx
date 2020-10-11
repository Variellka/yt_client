import React from 'react';
import './Search.css'

export const ImageVideo = ({video}) => {
    const imageVideo = video.snippet.thumbnails.high.url
    const titleVideo = video.snippet.title
    return (
        <div className={'video-info'}>
            <img src={imageVideo}/>
            <p>{titleVideo}</p>
        </div>
    )
}