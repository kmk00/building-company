import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import image from "../../assets/who-we-are-image.jpg";

function ImageCarousel() {
  console.log(image);

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img src={image.src} width={80} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image.src} width={80} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image.src} width={80} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image.src} width={80} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image.src} width={80} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image.src} width={80} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image.src} width={80} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image.src} width={80} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image.src} width={80} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ImageCarousel;
