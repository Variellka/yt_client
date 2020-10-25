import React from 'react';
import Slider from "react-slick";
import { Input, Button } from 'antd';
import './Search.css'
import { useState } from 'react';
import { VideoInformation} from "./VideoInformation";

function SearchVideo () {

    const [currentVideo, setCurrentVideo] = useState("");
    const [videos, setVideos] = useState([]);

    const handleClick = (e) => {
        getVideos(currentVideo);
        setCurrentVideo(currentVideo);
    };

    const getVideos = async (currentVideo) => {
        const key = 'AIzaSyBXgYCGVA9SQA1MbFxDx3jSodEFYeZvzxs'
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
        fetch(url)
            .then(data => data.json())
            .then((text) => {
                const videos = text.items
                setVideos([...videos])
            }).catch(function (error) {
            console.log('request failed', error)
        });
    }

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
                    <Input  placeholder="Enter some text.." value={currentVideo} onChange={e => {setCurrentVideo(e.target.value);}}/>
                    <Button  type="primary" danger onClick={handleClick}><span className={'button-search'}>Search video</span></Button>
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