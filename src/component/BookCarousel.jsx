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

const BookCarousel = () => {
  let bookList = features();
  return (
    <div className="book-slider-container" style={{ padding: '40px 0' }}>
     <Slider  books={bookList}/>
      
    </div>
  );
};

// Basic Inline Styles for Demo
const cardStyle = {
  background: '#fff',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
};



export const Slider = ({books}) => {
  return (
    <>
     <section className="w-full max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Collection</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-14"
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <Card className="w-full h-[450px] border-none">
              <CardHeader className="absolute z-10 top-2 flex-col items-start gap-2">
                <Chip 
                  variant="shadow" 
                  color="secondary" 
                  size="sm" 
                  className="capitalize"
                >
                  {book.category}
                </Chip>
                <h4 className="text-white/90 font-bold text-xl drop-shadow-lg leading-tight">
                  {book.title}
                </h4>
              </CardHeader>

              <img
                alt={book.title}
                className="z-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                src={book.image_url}
              />

              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 justify-between">
                <div className="flex flex-col">
                  <p className="text-tiny text-white/80">By {book.author}</p>
                  {/* <p className="text-tiny text-white/60">{book.available_quantity} in stock</p> */}
                </div>
                <Button 
                  radius="full" 
                  size="sm" 
                  color="primary"
                  variant="solid"
                >
                  Read Now
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  
    </>
  )
}

export default BookCarousel;