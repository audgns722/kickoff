import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import "moment/locale/ko";


const VideoView = () => {
    const [videoInfo, setVideoInfo] = useState(null); // 초기 상태를 null로 설정
    const { videoId } = useParams(); // useParams로 videoId 추출

    useEffect(() => {
        axios.post("/api/video")
            .then((response) => {
                const foundVideo = response.data.response.find(video =>
                    video.videos.some(v => v.id === videoId)
                );
                if (foundVideo) {
                    console.log(foundVideo)
                    setVideoInfo(foundVideo); // foundVideo 객체를 상태에 설정
                } else {
                    alert("해당 영상정보를 찾을수 없습니다.")
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [videoId]);

    function formatDateString(dateStr) {
        return moment(dateStr).format('YYYY년 MMMM Do a h:mm');
    }

    if (!videoInfo || videoInfo.length === 0) {
        return <div className='loaderWrap' style={{ padding: "55px 300px 0 55px" }}><span class="loader"></span></div>;
    }

    return (
        <>
            <div id='videoview' style={{ padding: "55px 300px 0 55px", backgroundColor: "var(--bgcolor)" }}>
                <div className="video__wrap">
                    <div className="video__play">
                        {videoInfo && videoInfo.videos.length > 0 &&
                            <div dangerouslySetInnerHTML={{ __html: videoInfo.videos[0].embed }}></div>
                        }
                    </div>
                    {videoInfo && (
                        <div className="video__info">
                            <div className="left">
                                <div className="league">
                                    {videoInfo.competition}
                                </div>
                                <div className="team">
                                    {videoInfo.title}
                                </div>
                            </div>
                            <div className="right">
                                {formatDateString(videoInfo.date)} 경기
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default VideoView;
