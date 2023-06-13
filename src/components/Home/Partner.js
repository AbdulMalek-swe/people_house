import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';

import img2 from '../../Assets/Photos/countdownflag.png'
import SwiperCore, {  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

SwiperCore.use([EffectCoverflow, Navigation]);
const Partner = () => {
    const breakpoints = {
        // When window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // When window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      };
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
     
  
    return (
        <div className='container-ml mb-[170px] ' id='partner'>
        <div>
            <div>
                <h1 className='text-black text-[40px] px-3 border-l-[5px] border-[#002868] h-[60px] my-[48px]'>Partners</h1>
                <p className='px-3 text-[#000000cc] font-500 text-[20px] mb-[22px]'> We are partnered</p>
            </div>
           
            <div className="container">
 
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        breakpoints={breakpoints}
        
      >
       { 
       [1,2,3,4,5,6,7,8].map(item=>  <SwiperSlide className='bg-white mx-auto   '>
        <img src={img2} alt="slide_image" className='w-[200px] h-[200px] rounded-full mx-auto' />
      </SwiperSlide>)
     
        }
        
         

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
        </div>
    </div>
    );
};

export default Partner;