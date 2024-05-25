import React from "react";
import ImageCarousel from "./ImageCarousel";

const CarouselApp = () => {
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  return (
    <div>
      <h1>Image Carousel Example</h1>
      <ImageCarousel images={images} />
    </div>
  );
};

export default CarouselApp;
