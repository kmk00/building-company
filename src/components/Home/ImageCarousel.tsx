import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";

import CarouselImage from "../Elements/CarouselImage";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

interface ImageCarouselProps {
  images: string[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
  const sectionStyles = {
    marginBlock: "4rem",
  };

  return (
    <section style={sectionStyles}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
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
