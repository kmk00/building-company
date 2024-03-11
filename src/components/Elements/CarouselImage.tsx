interface CarouselImageProps {
  src: string;
  alt: string;
}

function CarouselImage({ src, alt }: CarouselImageProps) {
  return (
    <div>
      <img src={src} width={"100%"} height={"100%"} alt={alt} />
    </div>
  );
}

export default CarouselImage;
