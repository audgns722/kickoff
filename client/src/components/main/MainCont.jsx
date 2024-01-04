import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import axios from 'axios';
import moment from "moment";
import "moment/locale/ko";

import TodayHighlight from './TodayHighlight';

// icon
import { FaShare } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import News from './News';


const MainCont = (props) => {
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        axios.post("/api/board/mainlist")
            .then((response) => {
                if (response.data.success) {
                    // console.log(response.data)
                    setBoardList([...response.data.boardList]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [boardList])

    function formatDateString(dateStr) {
        return moment(dateStr).format('YYYY년 MMMM Do a h:mm');
    }

    return (
        <>
            <div style={{ padding: "55px 300px 0 55px" }}>
                <TodayHighlight />

                {/* <News /> */}
                <div className="main__board">
                    {boardList.slice(0, 4).map((board, key) => {
                        return (
                            <div className="card" key={key}>
                                <div className="title">
                                    <p>TODAY ISSUE</p>
                                </div>
                                <p className="desc">
                                    <Link to={`/boarddetail/${board.boardNum}`}>
                                        {board.title}
                                    </Link>
                                </p>
                                <p className="desc">
                                    <Link to={`/boarddetail/${board.boardNum}`}>
                                        {board.content}
                                    </Link>
                                </p>

                                <div className="btn">
                                    <div className='date'>
                                        <span> {formatDateString(board.createdAt)}</span>
                                    </div>
                                    <div className='author'>
                                        <span> {board.author.displayName}</span>
                                    </div>

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
                        )
                    })}
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
    );
};

export default MainCont;
