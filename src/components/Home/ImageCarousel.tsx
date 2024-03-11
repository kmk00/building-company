import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import image from "../../assets/who-we-are-image.jpg";
import CarouselImage from "../Elements/CarouselImage";

function ImageCarousel() {
  const sectionStyles = {
    marginBlock: "4rem",
    padding: "1.5rem",
  };

  return (
    <section style={sectionStyles}>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <CarouselImage src={image.src} alt="Who we are image" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={image.src} alt="Who we are image" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={image.src} alt="Who we are image" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={image.src} alt="Who we are image" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={image.src} alt="Who we are image" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={image.src} alt="Who we are image" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={image.src} alt="Who we are image" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={image.src} alt="Who we are image" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default ImageCarousel;
