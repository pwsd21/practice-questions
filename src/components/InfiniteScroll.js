import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [shimmer, setShowShimmer] = useState(false);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight <= document.body.scrollHeight) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();

    window.addEventListener("scroll", handleScroll);
  }, []);

  const fetchData = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    console.log(json);
    setShowShimmer(false);
    setData((data) => [...data, ...json.memes]);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((item) => (
        <div
          style={{ width: "200px", height: "200px", border: "2px solid black" }}
        >
          <p>{item.title}</p>
          <p>{item.author}</p>
        </div>
      ))}
      {shimmer && <Shimmer />}
    </div>
  );
};

export default InfiniteScroll;
