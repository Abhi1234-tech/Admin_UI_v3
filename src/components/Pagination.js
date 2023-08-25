import React from "react";

function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const handleGoToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="pagination-container">
      <button onClick={() => handleGoToPage(1)}>First</button>
      <button onClick={() => handleGoToPage(currentPage - 1)}>Previous</button>
      {pageNumbers.map((pageNum) => (
        <button key={pageNum} onClick={() => handleGoToPage(pageNum)}>
          {pageNum}
        </button>
      ))}
      <button onClick={() => handleGoToPage(currentPage + 1)}>Next</button>
      <button onClick={() => handleGoToPage(totalPages)}>Last</button>
    </div>
  );
}

export default Pagination;
