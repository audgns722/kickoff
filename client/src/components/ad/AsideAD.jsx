import React from 'react'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

// img
import img01 from '../../assets/img/ad/asideAD_01.jpg';
import img02 from '../../assets/img/ad/asideAD_02.jpg';

const AsideAD = () => {
    const adInfo = [
        {
            title: "xx프렌드",
            img: img01,
            link: "#"
        },
        {
            title: "xx은행",
            img: img02,
            link: "#"
        }
    ]
    return (
        <Swiper
            spaceBetween={adInfo.length}
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
            {adInfo.map((item, index) => (
                <SwiperSlide key={index} className="news-slide">
                    <Link to={item.link} target='_blank' rel='noopener noreferrer'>
                        <img src={item.img} alt={item.title} />
                    </Link>
                </SwiperSlide>
            ))
            }
        </Swiper >
    )
}

export default AsideAD