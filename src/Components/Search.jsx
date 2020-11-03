import React from 'react';
import Slider from "react-slick";
import './Search.css'
import { useState } from 'react';
import { VideoInformation} from "./VideoInformation";
import { getVideos } from "../Requests/requests"

function SearchVideo () {
    const [currentVideo, setCurrentVideo] = useState("");
    const [videos, setVideos] = useState([]);

    const handleClick = (e) => {
        getVideos(currentVideo).then((videos)=>setVideos([...videos.items]))
        setCurrentVideo(currentVideo);
    };

    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        accessibility: true,
        arrows: true,
        useCSS: true,
        customPaging: function(i) {
            return (
                <a className={'slider-pagination'}>{i + 1}</a>
            );
        },
    }

    return (
        <div className={'video-app'}>
            <div className={'search'}>
                <div className={'search-video'}>
                    <input className={'search-input'} placeholder="Enter some text.." value={currentVideo} onChange={e => {setCurrentVideo(e.target.value);}}/>
                    <button className={'search-button'} onClick={handleClick}><span className={'button-search'}>Search video</span></button>
                </div>
            </div>
            <div className={'all-videos'}>
                <Slider {...settings} className={'slider'}>
                {videos.map(video => (
                    <VideoInformation video ={video} />
                ))}
                </Slider>
            </div>
        </div>
    )
}

export default SearchVideo;