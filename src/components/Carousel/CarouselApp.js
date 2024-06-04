import React, { useEffect, useState } from "react";
import ImageCarousel from "./Carousel";

const CarouselApp = () => {
  const [images, setImages] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const json = await res.json();
    const data = json.products?.map((item) => item.thumbnail).slice(0, 5);
    setImages(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Image Carousel Example</h1>
      <ImageCarousel images={images} />
    </div>
  );
};

export default CarouselApp;
