import React from 'react';
import './Search.css'
import person from '../Images/person.png'
import calendar from '../Images/calendar.png'
import { makeAFlip } from "../Requests/requests"

export const VideoInformation = ({video}) => {

    const videoImage = video.snippet.thumbnails.high.url
    const videoTitle = video.snippet.title
    const videoAuthor = video.snippet.channelTitle
    const videoDescription = video.snippet.description
    const videoURL =  video.id.videoId
    const videoPublished = video.snippet.publishedAt
    const videoDateParse = new Date(Date.parse(videoPublished)).toString().slice(4, 15);

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
                        <div className={'person-block'}>
                            <img src={person} className={'person-img'}/><p className={'video-info'}>{videoAuthor}</p>
                        </div>
                        <div className={'person-block'}>
                            <img src={calendar} className={'person-img'}/><p className={'video-info'}>{videoDateParse}</p>
                        </div>
                    </div>
                    <button className={'video-button'} onClick={makeAFlip}>Description</button>
                </div>
                <div className={'back'}>
                    <div className={'video-info-back-block'}>
                        <p className={'video-description'}>{videoDescription}</p>
                        <a href={`https://www.youtube.com/watch?v=${videoURL}`} target={'blank'}>Watch full video</a>
                    </div>
                    <button className={'video-button'} onClick={makeAFlip}>Back</button>
                </div>
            </div>
        </div>
    )
}