import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 5;

const ClientPaginate = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [noOfPages, setNoofPages] = useState(0);

  const indexOfLastItem = (currentPage + 1) * LIMIT;
  const indexOfFirstItem = indexOfLastItem - LIMIT;
  const currentItems = products
    ? products.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const json = await res.json();
    setProducts(json.products);
    setNoofPages(
      products.length % LIMIT === 0
        ? products.length / LIMIT
        : 1 + Math.floor(products.length / LIMIT)
    );
  };

  return (
    <>
      <div className="flex flex-wrap mt-20">
        {currentItems?.map((product) => (
          <ProductCard key={product} {...product} />
        ))}
      </div>
      <div className="flex justify-end mr-16 mb-10 mt-20 cursor-pointer">
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            Prev
          </span>
        )}
        {[...Array(noOfPages).keys()]?.map((pn) => (
          <span
            className={
              "pl-2 " + (pn === currentPage ? " font-bold" : "opacity-70")
            }
            onClick={() => setCurrentPage(pn)}
          >
            {pn + 1}
          </span>
        ))}
        {currentPage < noOfPages - 1 && (
          <span
            className="pl-2"
            onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
          >
            Next
          </span>
        )}
      </div>
    </>
  );
};

export default ClientPaginate;
