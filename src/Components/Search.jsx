import React from 'react';
import { Input, Button } from 'antd';
import './Search.css'
import { useState } from 'react';
import {ImageVideo} from "./ImageVideo";


function SearchVideo () {

    const [currentVideo, setCurrentVideo] = useState("");
    const [videos, setVideos] = useState([]);

    const handleClick = (e) => {
        getVideos(currentVideo);
        setCurrentVideo("");
    };


    const getVideos = async (currentVideo) => {
        const key = 'AIzaSyBXgYCGVA9SQA1MbFxDx3jSodEFYeZvzxs'
        let params = {
            key: key,
            type: 'video',
            part: 'snippet',
            maxResults: '5',
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
                for (const video of videos) {
                    setVideos([...videos, video])
                }
            }).catch(function (error) {
            console.log('request failed', error)
        });
    }

    const getVideoss = async (currentVideo) => {
        const key = 'AIzaSyCwTgH2E39qxv49Gk7Fqtoj_Eu2Pqvs6rE'
        const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=15&q=${currentVideo}`
        const xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            //console.log(xhr.responseText)
            setVideos([...videos, xhr.responseText])
        })
        xhr.open('GET', url)
        xhr.send()

        // try {
        //     const response = await fetch(url, {
        //         method: 'GET',
        //         body: JSON.stringify({currentVideo}),
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     })
        //     const json = await response.json()
        //     console.log(json)
        //     //return json
        //     setVideos([...videos, json])
        // } catch (error) {
        //     console.error('Ошибка:', error)
        // }
    }
    return (
        <>
            <h1>YouTube client</h1>
            <div className={'search'}>
                <div className={'search-video'}>
                    <Input placeholder="enter some text.." value={currentVideo} onChange={e => {setCurrentVideo(e.target.value);}}/>
                    <Button type="primary"  onClick={handleClick}>search video</Button>
                </div>
            </div>
            <div className={'all-videos'}>
                {videos.map(video => (
                    <ImageVideo video ={video} />
                ))}
            </div>
        </>
    )
}

export default SearchVideo;