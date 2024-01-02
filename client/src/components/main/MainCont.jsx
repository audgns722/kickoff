import React from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

import TodayHighlight from './TodayHighlight';

// icon
import { FaShare } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const MainCont = (props) => {

    return (
        <>
            <div style={{ padding: "55px 300px 0 55px" }}>
                <TodayHighlight />
                <div className="main__board">
                    <div className="card">
                        <div className="title">
                            <p>today issue</p>
                        </div>
                        <p className="desc">
                            이번주 해축 레전드인듯이번주 해축 레전드인듯이번주 해축 레전드인듯이번주 해축 레전드인듯 이번주 해축 레전드인듯이번주 해축 레전드인듯이번주 해축 레전드인듯이번주 해축 이번주
                            해축 레전드인듯이번주 해축 레전드인듯이번주 해축 레전드인듯이번주 해축 레전드인듯 이번주 해축 레전드인듯이번주 해축 레전드인듯이번주 해축 레전드인듯 이번주 해축 레전드인듯
                            이번주 해축 레전드인듯
                            이번주 해축 레전드인듯 이번주 해축 레전드인듯
                        </p>
                        <div className="btn">
                            <div className="like">
                                <AiOutlineLike />
                                <span>369</span>
                            </div>
                            <div className="share">
                                <FaShare />
                                <span>369</span>
                            </div>
                        </div>
                    </div>
                </div>

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
                            {props.videoInfo.slice(0, 15).map((video, key) => (
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
            </div >
        </>
    )
}

export default MainCont