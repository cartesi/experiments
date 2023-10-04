import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Carousel = ({ className, children }: Props) => {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={24}
      breakpoints={{
        640: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.5,
        },
      }}
      className={className}
    >
      {children}
    </Swiper>
  );
};

Carousel.Slide = SwiperSlide;

export default Carousel;
