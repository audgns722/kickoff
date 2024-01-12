import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.post('/api/news');
                // console.log(response);
                const sportNews = response.data;
                setNews(sportNews);
            } catch (error) {
                console.error('뉴스를 불러오는데 실패했습니다.', error);
            }
        };

        fetchNews();
    }, []);

    // 조건부 렌더링
    if (!news || news.length === 0) {
        return <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><span className="loader"></span></div>;;
    }

    return (
        <div className='main__news'>
            <h2>NEWS</h2>
            <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                navigation={false}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {news && news.slice(0, 10).map((item, index) => (
                    <SwiperSlide key={index} className="news-slide">
                        <div className="news-content">
                            <p>
                                <Link to={item.link} target='_blank' rel='noopener noreferrer'>
                                    {item.title.replace(/<b>|<\/b>/g, '').replace(/&quot;/g, '"')}
                                </Link>
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default News;
