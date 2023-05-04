import React, { useState, useEffect } from "react";
import axios from "axios";
import PaginationButton from "./PaginationButton";
const PAGE_SIZE = 5;
export const Paginatedusercomp = () => {
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      axios
        .get("/api/items", {
          params: {//we are here passing parameter to api to retrive based on this
            page: currentPage,
            pageSize: PAGE_SIZE,
          },
        })
        .then((response) => {
          setItems(response.data.items);
          setTotalItems(response.data.totalItems);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
  return (
    <div>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <PaginationButton
      currentPage={currentPage}
      totalPages={Math.ceil(totalItems / PAGE_SIZE)}
      onPageChange={handlePageChange}
    />
  </div>
  )
}
