import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 5; // Number of products to display per page

const ClientPaginate = () => {
  const [products, setProducts] = useState([]); // State to hold products fetched from API
  const [currentPage, setCurrentPage] = useState(0); // State to manage current page number
  const [noOfPages, setNoofPages] = useState(0); // State to store total number of pages

  // Calculate the index of the last and first item to display on the current page
  const indexOfLastItem = (currentPage + 1) * LIMIT;
  const indexOfFirstItem = indexOfLastItem - LIMIT;
  // Slice the products array to get the current items to display
  const currentItems = products
    ? products.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  // Fetch products from API when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to fetch products from the API
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const json = await res.json();
    setProducts(json.products); // Update products state with fetched data
    // Calculate total number of pages based on the fetched products
    setNoofPages(
      products.length % LIMIT === 0
        ? products.length / LIMIT
        : 1 + Math.floor(products.length / LIMIT)
    );
  };

  return (
    <>
      {/* Display current items using ProductCard component */}
      <div className="flex flex-wrap mt-20">
        {currentItems?.map((product) => (
          <ProductCard key={product} {...product} />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-end mr-16 mb-10 mt-20 cursor-pointer">
        {/* Render "Prev" button if not on the first page */}
        {currentPage > 0 && (
          <span
            onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
          >
            Prev
          </span>
        )}
        {/* Render page number buttons */}
        {[...Array(noOfPages).keys()].map((pn) => (
          <span
            key={pn}
            className={
              "pl-2 " + (pn === currentPage ? "font-bold" : "opacity-70")
            }
            onClick={() => setCurrentPage(pn)}
          >
            {pn + 1}
          </span>
        ))}
        {/* Render "Next" button if not on the last page */}
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
