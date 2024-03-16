interface CarouselImageProps {
  src: string;
  alt: string;
}

function CarouselImage({ src, alt }: CarouselImageProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={src} width={"60%"} height={"60%"} alt={alt} />
    </div>
  );
}

export default CarouselImage;
