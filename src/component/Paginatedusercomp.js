import React, { useState, useEffect } from "react";
import axios from "axios";
import PaginationButton from "./PaginationButton";
const PAGE_SIZE = 2;
export const Paginatedusercomp = () => {
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      axios
        .get("http://localhost:3000/user/api/items", {
          params: {
          //we are here passing parameter to api to retrive based on this
            page: currentPage,
            pageSize: PAGE_SIZE,
          },
        })
        .then((response) => {
          //data.items and data.totalItems are properties of the data object returned by the Axios GET request.
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
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    <PaginationButton
      currentPage={currentPage}
      totalPages={Math.ceil(totalItems / PAGE_SIZE)}
      onPageChange={handlePageChange}
    />
  </div>
  )
}
