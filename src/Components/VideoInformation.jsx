import React from 'react';
import './Search.css'

export const VideoInformation = ({video}) => {
    const videoImage = video.snippet.thumbnails.high.url
    const videoTitle = video.snippet.title
    const videoAuthor = video.snippet.channelTitle
    const videoDescription = video.snippet.description
    const videoURL =  video.id.videoId

    const videoPublished = video.snippet.publishedAt
    const videoDateParse = new Date(Date.parse(videoPublished)).toString().slice(4, 15);

    return (
        <div className={'video-info'}>
            <img src={videoImage}/>
            <p>{videoTitle}</p>
            <p><strong>{videoAuthor}</strong></p>
            <p><em>{videoDateParse}</em></p>
            <button >Description</button>
            <div className={'video-description block'}>
                <p>{videoDescription}</p>
                <a href={`https://www.youtube.com/watch?v=${videoURL}`}>Watch full video</a>
            </div>
        </div>
    )
}