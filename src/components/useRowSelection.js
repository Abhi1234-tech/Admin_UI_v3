import { useState } from "react";

export function useRowSelection(initialUsers = []) {
  const [users, setUsers] = useState(initialUsers);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const toggleRowSelection = (userId) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === users.length) {
      setSelectedRows([]);
    } else {
      const allUserIds = users.map((user) => user.id);
      setSelectedRows(allUserIds);
    }
  };

  const handleDeleteAll = () => {
    // Delete the selected rows from the users list
    const updatedUsers = users.filter(
      (user) => !selectedRows.includes(user.id)
    );
    setUsers(updatedUsers);
    setSelectedRows([]);
  };

  return {
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
  };
}
