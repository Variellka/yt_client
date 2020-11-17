import React from 'react';
import s from './VideoInformation.module.css';
import person from '../Images/person.svg';
import calendar from '../Images/calendar.svg';
import { makeAFlip } from "../Requests/requests";
import './justFlip.css'

export const VideoInformation = ({video}) => {

    const videoImage = video.snippet.thumbnails.high.url
    const videoTitle = video.snippet.title
    const videoAuthor = video.snippet.channelTitle
    const videoDescription = video.snippet.description
    const videoURL =  video.id.videoId
    const videoPublished = video.snippet.publishedAt
    const videoDateParse = new Date(Date.parse(videoPublished)).toString().slice(4, 15);

    return (
        <div className={s.flip_container}>
            <div className={s.flipper}>
                <div className={s.front}>
                    <div className={s.image_and_title}>
                        <img src={videoImage} alt={s.video_image}/>
                        <div className={s.video_title_block}>
                            <p className={s.video_title}>{videoTitle}</p>
                        </div>
                    </div>
                    <div className={s.video_info_block}>
                        <div className={s.person_block}>
                            <img src={person} className={s.person_img} alt={'video-author'}/><p className={s.video_info}>{videoAuthor}</p>
                        </div>
                        <div className={s.person_block}>
                            <img src={calendar} className={s.person_img} alt={'video-date'}/><p className={s.video_info}>{videoDateParse}</p>
                        </div>
                    </div>
                    <button className={s.video_button} onClick={makeAFlip}>Description</button>
                </div>
                <div className={s.back}>
                    <div className={s.video_info_back_block}>
                        <p className={s.video_description}>{videoDescription}</p>
                        <a href={`https://www.youtube.com/watch?v=${videoURL}`} target={'blank'}>Watch full video</a>
                    </div>
                    <button className={s.video_button} onClick={makeAFlip}>Back</button>
                </div>
            </div>
        </div>
    )
}