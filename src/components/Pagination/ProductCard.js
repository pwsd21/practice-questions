import React from "react";

const ProductCard = ({ id, title, description, price, thumbnail }) => {
  return (
    <div
      className="flex flex-col justify-center items-center h-76 w-72 p-2 m-1 border border-black object-contain"
      key={id}
    >
      <h1>
        {id} - {title}
      </h1>
      <h2>{price}</h2>
      <img src={thumbnail} alt="prod" className="h-24 w-24" />
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
