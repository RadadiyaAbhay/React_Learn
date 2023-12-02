import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';

function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://picsum.photos/id/99/1500/700" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/29/1500/700" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/67/1500/700" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/24/1500/700" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/25/1500/700" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/26/1500/700" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/43/1500/700" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/28/1500/700" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/20/1500/700" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/35/1500/700" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/45/1500/700" alt=""/></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/id/47/1500/700" alt=""/></SwiperSlide>

      </Swiper>
    </>
  )
}

export default Slider
