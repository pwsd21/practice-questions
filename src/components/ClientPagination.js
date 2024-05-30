import { useState } from "react";

const ClientPagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    ? data.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const paginate = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(data.length / itemsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <h1>Ram Ram Bhai</h1>
      <ul>
        {currentItems?.map((item) => (
          <li key={item.id}>{item.firstName}</li>
        ))}
      </ul>
      <div>
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ClientPagination;
