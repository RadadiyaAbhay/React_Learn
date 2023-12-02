import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Slider2() {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true} modules={[EffectCoverflow, Pagination]} className="mySwiper"
            >
                <SwiperSlide><img src="https://picsum.photos/id/99/400/400" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/id/29/400/400" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/id/67/400/400" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/id/24/400/400" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/id/25/400/400" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/id/26/400/400" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/id/43/400/400" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/id/28/400/400" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/id/20/400/400" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/id/35/400/400" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/id/45/400/400" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/id/47/400/400" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider2
