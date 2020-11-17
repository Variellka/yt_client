import React from 'react';
import Slider from "react-slick";
import s from './MainPage.module.css';
import { useState } from 'react';
import { VideoInformation} from "../Components/VideoInformation";
import { getVideos } from "../Requests/requests";
import { Pagination } from "../Components/Pagination";

function MainPage () {
    const [currentVideo, setCurrentVideo] = useState("");
    const [videos, setVideos] = useState([]);

    const handleClick = (e) => {
        getVideos(currentVideo).then((videos)=>setVideos([...videos.items]))
        setCurrentVideo(currentVideo);
    };

    const handlePress = (e) => {
        if (e.keyCode === 13) {
            getVideos(currentVideo).then((videos)=>setVideos([...videos.items]))
            setCurrentVideo(currentVideo);
        }
        else console.log('error')
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
                <a className={s.slider_pagination}>{i + 1}</a>
            );
        },
    }

    return (
        <div className={s.video_app}>
            <div className={s.search}>
                <div className={s.search_video}>
                    <input className={s.search_input} placeholder="Enter some text.." value={currentVideo} onKeyDown={handlePress} onChange={e => {setCurrentVideo(e.target.value);}} />
                    <button className={s.search_button}  onClick={handleClick}><span className={'button-search'}>Search video</span></button>
                </div>
            </div>
            <div className={s.all_videos}>
                <Slider {...settings} className={s.slider}>
                    {videos.map(video => (
                        <VideoInformation video={video} />
                    ))}
                </Slider>
            </div>
            {/*<Pagination videos={videosALL}></Pagination>*/}
        </div>
    )
}

export default MainPage;