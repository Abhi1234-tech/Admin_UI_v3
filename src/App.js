import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import API from "./components/API";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import SelectDeleteButtons from "./components/SelectDeleteButtons";
import { useRowSelection } from "./components/useRowSelection";

export default function App() {
  const {
    users,
    setUsers,
    selectedRows,
    setSelectedRows,
    currentPage,
    setCurrentPage,
    searchResults,
    setSearchResults,
    toggleRowSelection,
    handleSelectAll,
    handleDeleteAll
  } = useRowSelection([]);
  //getting output interms of components by giving props
  return (
    <div className="App">
      <Header setSearchResults={setSearchResults} users={users} />
      <API setUsers={setUsers} />

      <Table
        users={searchResults.length > 0 ? searchResults : users}
        setUsers={setUsers}
        selectedRows={selectedRows}
        toggleRowSelection={toggleRowSelection}
        currentPage={currentPage}
        rowsPerPage={10}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={Math.ceil(users.length / 10)}
      />
      <SelectDeleteButtons
        selectedRows={selectedRows}
        users={users}
        handleSelectAll={handleSelectAll}
        handleDeleteAll={handleDeleteAll}
      />
    </div>
  );
}
