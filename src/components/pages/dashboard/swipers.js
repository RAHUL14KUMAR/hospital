import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

import './style.css';
import { EffectFlip, Autoplay, Pagination, Navigation } from 'swiper/modules';

function Swipers() {
  return (
    <div>
        <Swiper
        effect={'flip'}
        loop={true}
        grabCursor={true}
        autoplay={false}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFlip, Pagination, Navigation]}
        className="mySwiper swap"
      >
        <SwiperSlide>
        <div className='w-fit bg-white h-fit flex p-5 my-20'>
            <div className='bg-purple-200 w-44 h-24'>
            </div>
            <div className='px-2'>
              <h1 className='text-lg font-bold tracking-widest font-baloo-bhai'>Vikash Kumar</h1>
              <p className='font-medium font-baloo-bhai overflow-hidden'>Tounge cancer</p>
              <p className='text-emerald-900 font-bold'>Received best medical guidance for cure the cancer</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-fit bg-white h-fit flex p-5 my-20'>
            <div className='bg-purple-200 w-44 h-24'>
            </div>
            <div className='px-2'>
              <h1 className='text-lg font-bold tracking-widest font-baloo-bhai'>Dhruv sharma</h1>
              <p className='font-medium font-baloo-bhai overflow-hidden'>stoamch cancer</p>
              <p className='text-emerald-900 font-bold'>Received world class treatment from experienced doctor</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-fit bg-white h-fit flex p-5 my-20'>
            <div className='bg-purple-200 w-44 h-24'>
            </div>
            <div className='px-2'>
              <h1 className='text-lg font-bold tracking-widest font-baloo-bhai'>Krishna Agrawal</h1>
              <p className='font-medium font-baloo-bhai overflow-hidden'>Heart patient</p>
              <p className='text-emerald-900 font-bold'>Have done bypass surgery from india's finest doctors at affordable price</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-fit bg-white h-fit flex p-5 my-20'>
            <div className='bg-purple-200 w-44 h-24'>
            </div>
            <div className='px-2'>
              <h1 className='text-lg font-bold tracking-widest font-baloo-bhai'>Rahul Kumar</h1>
              <p className='font-medium font-baloo-bhai overflow-hidden'>Heart patient</p>
              <p className='text-emerald-900 font-bold'>Received best doctor advice in my life</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-fit bg-white h-fit flex p-5 my-20'>
            <div className='bg-purple-200 w-44 h-24'>
            </div>
            <div className='px-2'>
              <h1 className='text-lg font-bold tracking-widest font-baloo-bhai'>Nitish Kumar</h1>
              <p className='font-medium font-baloo-bhai overflow-hidden'>Bone patient</p>
              <p className='text-emerald-900 font-bold'>Get cure from backbone facture.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-fit bg-white h-fit flex p-5 my-20'>
            <div className='bg-purple-200 w-44 h-24'>
            </div>
            <div className='px-2'>
              <h1 className='text-lg font-bold tracking-widest font-baloo-bhai'>Rohit Ranjan</h1>
              <p className='font-medium font-baloo-bhai overflow-hidden'>Heart patient</p>
              <p className='text-emerald-900 font-bold'>lead a healthy life after recover from blood cancer</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default Swipers


