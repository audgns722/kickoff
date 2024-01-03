// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const News = () => {
//     const [news, setNews] = useState([]);

//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 const response = await axios.post('/api/news');
//                 console.log(response);
//                 setNews(response.data.news.articles); // API의 응답 구조에 따라 조정하세요.
//             } catch (error) {
//                 console.error('뉴스를 불러오는데 실패했습니다.', error);
//             }
//         };

//         fetchNews();
//     }, []);

//     return (
//         <div className='main__news' style={{ backgroundColor: "var(--white)" }}>
//             <h1>뉴스 헤드라인</h1>
//             {news && news.slice(0, 10).map((article, index) => (
//                 <div key={index}>
//                     <h2><Link to={article.url} target='_blank'>{article.title}</Link></h2>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default News;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
// import { Navigation } from 'swiper/modules';
// import { Autoplay } from 'swiper/modules';



// const News = () => {
//     const [news, setNews] = useState([]);

//     useEffect(() => {
//         const fetchNews = async () => {
//             try {
//                 const response = await axios.post('/api/news');
//                 console.log(response);
//                 setNews(response.data.news.articles); // API의 응답 구조에 따라 조정하세요.
//             } catch (error) {
//                 console.error('뉴스를 불러오는데 실패했습니다.', error);
//             }
//         };

//         fetchNews();
//     }, []);

//     return (
//         <div className='main__news'>
//             <h2>NEWS</h2>
//             <Swiper
//                 spaceBetween={15}
//                 slidesPerView={'auto'}
//                 navigation={true}
//                 loop={true}
//                 autoplay={{
//                     delay: 3000,
//                     disableOnInteraction: false,
//                 }}
//                 modules={[Autoplay, Navigation]}
//                 className="mySwiper"
//             >
//                 {news && news.slice(0, 10).map((article, index) => (
//                     <SwiperSlide key={index} className="news-slide">
//                         <div className="news-content">
//                             <p>
//                                 <Link to={article.url} target='_blank' rel='noopener noreferrer'>
//                                     {article.title}
//                                 </Link>
//                             </p>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default News;



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

    return (
        <div className='main__news'>
            <h2>NEWS</h2>
            <Swiper
                spaceBetween={15}
                slidesPerView={'auto'}
                navigation={true}
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
                                    {item.title.replace(/<b>|<\/b>/g, '')}
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
