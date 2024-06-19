import React, { useEffect, useState } from "react";
import ImageCarousel from "./Carousel"; // Import the ImageCarousel component

const CarouselApp = () => {
  const [images, setImages] = useState([]); // State to store image URLs

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products"); // Fetch data from the API
      const json = await res.json(); // Convert response to JSON
      const data = json.products?.map((item) => item.thumbnail).slice(0, 5); // Extract thumbnail URLs and limit to 5
      setImages(data); // Update state with fetched image URLs
    } catch (error) {
      console.error("Error fetching data: ", error); // Handle errors
    }
  };

  // useEffect to fetch data on component mount
  useEffect(() => {
    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1>Image Carousel Example</h1>
      <ImageCarousel images={images} />{" "}
      {/* Pass the images array to the ImageCarousel component */}
    </div>
  );
};

export default CarouselApp;
