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

    const handleClick = () => {
        document.querySelector('.flip-container').classList.toggle('flip')
    }

    return (
        <div className={'flip-container'}>
            <div className={'flipper'}>
                <div className={'front'}>
                    <div className={'image-and-title'}>
                        <img src={videoImage}/>
                        <div className={'video-title-block'}>
                            <p className={'video-title'}>{videoTitle}</p>
                        </div>
                    </div>
                    <div className={'video-info-block'}>
                        <p className={'video-info'}>{videoAuthor}</p>
                        <p className={'video-info'}>{videoDateParse}</p>
                    </div>
                    <button className={'video-button'} onClick={handleClick}>Description</button>
                </div>
                <div className={'back'}>
                    <p>{videoDescription}</p>
                    <a href={`https://www.youtube.com/watch?v=${videoURL}`} target={'blank'}>Watch full video</a>
                    <button className={'video-button'}>Back</button>
                </div>
            </div>
        </div>
    )
}