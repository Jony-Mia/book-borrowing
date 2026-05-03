"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardHeader, CardBody, CardFooter, Button, Chip } from "@heroui/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { features } from '../../API/features';
import Image from 'next/image';
import banner1 from "@/assets/book-banner.jpg"
import banner2 from "@/assets/book-banner-2.jpg"
import banner3 from "@/assets/banner-3.jpg"
import banner4 from "@/assets/banner-4.avif"
const BookCarousel = () => {
  let bookList = features();
  return (
    <div className="book-slider-container" style={{ padding: '40px 0' }}>
     <Slider  books={bookList}/>
      
    </div>
  );
};



export const Slider = ({books}) => {
  return (
    <>
     <section className="w-full mx-auto px-1">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Collection</h2>
        
 <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className=''>
          <Image alt="book image" src={banner1} width={"1920"} className='w-full object-cover ' />
        </SwiperSlide>
        <SwiperSlide className=''>
          <Image alt="book image" src={banner2} width={"1220"} height={"720"} className='w-full object-cover ' />
        </SwiperSlide>
        <SwiperSlide className=''>
          <Image alt="book image" src={banner3} width={"1920"} height={"720"}  className='w-full object-cover ' />
        </SwiperSlide>
        <SwiperSlide className=''>
          <Image alt="book image" src={banner4} width={"1920"} height={"720"}  className='w-full object-cover ' />
        </SwiperSlide>
    
      </Swiper>
    </section>
  
    </>
  )
}

export default BookCarousel;