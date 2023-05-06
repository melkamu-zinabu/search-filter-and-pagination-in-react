import React, { useState, useEffect } from "react";
import axios from "axios";
import PaginationButton from "./PaginationButton";

const PAGE_SIZE = 2;

export const SecPaginatedusercomp = () => {
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  useEffect(() => {
    axios
    .get("http://localhost:3000/user/api/", {
      params: {
        page: currentPage,
        pageSize: PAGE_SIZE,
        search: searchTerm,
        filter: filterTerm,
      },
    })
    .then((response) => {
      setItems(response.data.items);
      setTotalItems(response.data.totalItems);
    })
    .catch((error) => {
      console.error(error);
    });

  }, [currentPage, searchTerm, filterTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={filterTerm} onChange={handleFilterChange}>
          <option value="">Filter by...</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
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
  );
};
