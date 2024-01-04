import React, { useEffect, useState } from 'react'
import axios from 'axios'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const MainVideo = () => {
    const [videoInfo, setVideoInfo] = useState([]);

    // video
    useEffect(() => {
        axios.post("/api/video")
            .then((response) => {
                // console.log(response.data)
                const countries = ["La Liga", "Serie A", "Ligue 1", "Bundesliga", "ENGLAND: Premier League"];
                const filteredVideos = response.data.response
                    .filter(video => countries.some(country => video.competition.includes(country))) // 여러 국가 포함 필터링
                    .sort((a, b) => new Date(b.date) - new Date(a.date)); // 최신순 정렬
                setVideoInfo(filteredVideos);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="main__video">
            <div className="video__wrap">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={'auto'}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {videoInfo.slice(0, 15).map((video, key) => (
                        <SwiperSlide key={key} className="video">
                            {video.videos.length > 0 && (
                                <Link to={`/videoview/${video.videos[0].id}`}>
                                    <img src={video.thumbnail} alt="video thumbnail" />
                                </Link>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default MainVideo