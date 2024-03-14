import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

import CarouselImage from "../Elements/CarouselImage";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
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
