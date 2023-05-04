import React from "react";


function PaginationButton({ currentPage, totalPages, onPageChange }) { 
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div>
        {currentPage > 1 && (
          <button onClick={() => onPageChange(currentPage - 1)}>Prev</button>
        )}
  
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </button>
        ))}
  
        {currentPage < totalPages && (
          <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
        )}
      </div>
    );
}

export default PaginationButton

