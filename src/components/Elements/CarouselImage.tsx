interface CarouselImageProps {
  src: string;
  alt: string;
}

function CarouselImage({ src, alt }: CarouselImageProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img src={src} width={"80%"} height={"80%"} alt={alt} />
    </div>
  );
}

export default CarouselImage;
