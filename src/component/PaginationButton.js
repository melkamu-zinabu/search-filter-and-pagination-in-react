import React from "react";
// correct

function PaginationButton({ currentPage, totalPages, onPageChange }) { 
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      //pageNumbers.push(i) is used to populate an array of page numbers.
      //The push() method is a built-in method in JavaScript arrays that adds one or more elements to the end of an array and returns the new length of the array.
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

