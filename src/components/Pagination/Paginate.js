import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 20; // Number of items to fetch per page

const Paginate = () => {
  const [currentPage, setCurrentPage] = useState(0); // State to manage current page number
  const [products, setProducts] = useState([]); // State to hold fetched products
  const [noOfPages, setNoofPages] = useState(0); // State to store total number of pages

  // Effect to fetch data when currentPage changes
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  // Function to fetch products from the API
  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,description,thumbnail`
    );
    const json = await data.json(); // Parse response JSON
    console.log(json);
    setProducts(json.products); // Update products state with fetched data
    // Calculate total number of pages based on total count of products
    setNoofPages(
      json.total % LIMIT === 0
        ? json.total / LIMIT
        : 1 + Math.floor(json.total / LIMIT)
    );
  };

  return (
    <>
      {/* Display fetched products using ProductCard component */}
      <div className="flex flex-wrap mt-20">
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="p-4 cursor-pointer flex justify-end mr-8">
        {/* Render "prev" button if not on the first page */}
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            prev
          </span>
        )}
        {/* Render page number buttons */}
        {[...Array(noOfPages).keys()].map((pn) => (
          <span
            key={pn}
            className={"pl-2 " + (pn === currentPage && "font-bold underline")}
            onClick={() => setCurrentPage(pn)}
          >
            {pn + 1}
          </span>
        ))}
        {/* Render "next" button if not on the last page */}
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
