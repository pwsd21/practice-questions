// OFFSET Pagination

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 20;

const Paginate = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoofPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  // Fetch Data
  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,description,thumbnail`
    );
    const json = await data.json();
    console.log(json);
    setProducts(json.products);
    setNoofPages(
      json.total % LIMIT === 0
        ? json.total / LIMIT
        : 1 + Math.floor(json.total / LIMIT)
    );
  };

  return (
    <>
      <div className="flex flex-wrap mt-20">
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="p-4 cursor-pointer flex justify-end mr-8">
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            prev
          </span>
        )}
        {[...Array(noOfPages).keys()].map((pn) => (
          <span
            className={"pl-2 " + (pn === currentPage && "font-bold underline")}
            onClick={() => setCurrentPage(pn)}
          >
            {pn + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          >
            next
          </span>
        )}
      </div>
    </>
  );
};

export default Paginate;
