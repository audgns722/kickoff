// import React from 'react';
// import { Link } from 'react-router-dom'

// import News from './News';

// // swiper
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import { Autoplay } from 'swiper/modules';

// // icon
// import { FaShare } from "react-icons/fa";
// import { AiOutlineLike } from "react-icons/ai";

// const MainCont = (props) => {

//     return (
//         <>
//             <div style={{ padding: "55px 300px 0 55px" }}>
//                 <div className="today__highlight">
//                     <div className="highlight__info">
//                         <div className="league">
//                             PREMIER LEAGUE
//                         </div>
//                         <div className="home">
//                             chelsea
//                         </div>
//                         <span>VS</span>
//                         <div className="away">
//                             ARSENAL
//                         </div>
//                         <div className="desc">
//                             한국대표팀 주장 손흥민은 지난 4일
//                             맨체스터 시티(이하 맨시티)를 맞아
//                             1골, 1도움, 1자책골을 기록했다.
//                         </div>
//                         <div className="btn">
//                             <Link href="/">
//                                 <div className="icon">
//                                     <FaShare />
//                                 </div>
//                                 <i>VIEW</i>
//                             </Link>
//                         </div>
//                     </div>
//                     <div className="highlight__socre">
//                         <div className="league">
//                             <p>PREMIERLEAGUE</p>
//                         </div>
//                         <div className="score">
//                             <div className="home">
//                                 <span>HOME</span>
//                                 <p>chelsea</p>
//                             </div>
//                             <div className="point">
//                                 <i>SCORE</i>
//                                 <span>
//                                     <div className="home">
//                                         1
//                                     </div>
//                                     <span>:</span>
//                                     <div className="away">
//                                         2
//                                     </div>
//                                 </span>
//                             </div>
//                             <div className="away">
//                                 <span>AWAY</span>
//                                 <p>arsenal</p>
//                             </div>
//                         </div>
//                         <div className="date">
//                             <p>DATE <span>2023.12.06</span></p>
//                         </div>
//                     </div>
//                 </div>
//                 <News news={props.news} />
//                 <div className="main__board">
//                     {props.news.map((article, index) => (
//                         <div className="card" key={index}>
//                             <div className="title">
//                                 <p>{article.title}</p>
//                             </div>
//                             <p className="desc">
//                                 {article.description}
//                             </p>
//                             <div className="btn">
//                                 <div className="like">
//                                     <AiOutlineLike />
//                                     <span>369</span>
//                                 </div>
//                                 <div className="share">
//                                     <FaShare />
//                                     <span>369</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="main__video">
//                     <div className="video__wrap">
//                         <Swiper
//                             spaceBetween={15}
//                             slidesPerView={'auto'}
//                             navigation={true}
//                             loop={true}
//                             autoplay={{
//                                 delay: 2500,
//                                 disableOnInteraction: false,
//                             }}
//                             modules={[Autoplay, Navigation]}
//                             className="mySwiper"
//                         >
//                             {props.videoInfo.slice(0, 15).map((video, key) => (
//                                 <SwiperSlide key={key} className="video">
//                                     {video.videos.length > 0 && (
//                                         <Link to={`/videoview/${video.videos[0].id}`}>
//                                             <img src={video.thumbnail} alt="썸네일" />
//                                         </Link>
//                                     )}
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                     </div>
//                 </div>
//             </div >
//         </>
//     )
// }

// export default MainCont


import React from 'react';
import { Link } from 'react-router-dom';
import News from './News';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

// icon
import { FaShare } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const MainCont = (props) => {
    return (
        <>
            <div style={{ padding: "55px 300px 0 55px" }}>
                <div className="today__highlight">
                    <div className="highlight__info">
                        <div className="league">
                            PREMIER LEAGUE
                        </div>
                        <div className="home">
                            chelsea
                        </div>
                        <span>VS</span>
                        <div className="away">
                            ARSENAL
                        </div>
                        <div className="desc">
                            한국대표팀 주장 손흥민은 지난 4일
                            맨체스터 시티(이하 맨시티)를 맞아
                            1골, 1도움, 1자책골을 기록했다.
                        </div>
                        <div className="btn">
                            <Link to="/">
                                <div className="icon">
                                    <FaShare />
                                </div>
                                <i>VIEW</i>
                            </Link>
                        </div>
                    </div>
                    <div className="highlight__socre">
                        <div className="league">
                            <p>PREMIERLEAGUE</p>
                        </div>
                        <div className="score">
                            <div className="home">
                                <span>HOME</span>
                                <p>chelsea</p>
                            </div>
                            <div className="point">
                                <i>SCORE</i>
                                <span>
                                    <div className="home">
                                        1
                                    </div>
                                    <span>:</span>
                                    <div className="away">
                                        2
                                    </div>
                                </span>
                            </div>
                            <div className="away">
                                <span>AWAY</span>
                                <p>arsenal</p>
                            </div>
                        </div>
                        <div className="date">
                            <p>DATE <span>2023.12.06</span></p>
                        </div>
                    </div>
                </div>

                <News />

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
                                            <img src={video.thumbnail} alt="썸네일" />
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
