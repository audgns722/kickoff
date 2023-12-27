import React, { useEffect, useState } from 'react'
import Header from '../layout/Header'
import Nav from '../layout/Nav'
import axios from 'axios'

const VideoView = () => {
    const [videoInfo, setVideoInfo] = useState([]);

    // video
    useEffect(() => {
        axios.post("/api/video")
            .then((response) => {
                console.log(response.data);
                setVideoInfo(response.data.response);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <Header />
            <Nav />
            <div id='videoview'>
                <div className="video__wrap">
                    <div className="video__play">
                        {videoInfo.length > 0 && videoInfo[0].videos.length > 0 &&
                            <div dangerouslySetInnerHTML={{ __html: videoInfo[0].videos[0].embed }}></div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoView