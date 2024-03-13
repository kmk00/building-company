import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CarouselImage from "../Elements/CarouselImage";

interface ImageCarouselProps {
  images: string[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
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
        {images.map((image) => (
          <SwiperSlide key={image}>
            <CarouselImage src={image} alt="Carousel image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ImageCarousel;
