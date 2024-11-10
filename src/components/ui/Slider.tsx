"use client";

import { useState } from "react";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import { Img } from "./image";

import "swiper/css";
import "swiper/css/effect-coverflow";

export const Slider = ({ images }: { images: string[] }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSlideChange = () => {
    if (swiperRef) setCurrentIndex(swiperRef.realIndex);
  };

  const goToSlide = (index: number) => {
    if (swiperRef) swiperRef.slideTo(index);
  };

  return (
    <div className="relative pt-8 sm:pt-12 md:pt-16 px-4 sm:px-8 xl:px-0">
      <Swiper
        onSwiper={setSwiperRef}
        onSlideChange={handleSlideChange}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: -50,
          depth: 250,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Img src={image} className="w-full h-60 sm:h-80 md:h-96 rounded-xl" alt="Banners Top Up" cover />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-16 z-1 flex gap-2">
        {images.map((_, index) => (
          <span onClick={() => goToSlide(index)} key={index} className={`h-2 min-w-16 block rounded-lg cursor-pointer ${currentIndex === index ? "bg-background" : "bg-light"}`}></span>
        ))}
      </div>
    </div>
  );
};
