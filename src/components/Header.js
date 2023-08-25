import React, { useState } from "react";

function Header({ setSearchResults, users }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredResults = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase()) ||
        user.role.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  // You can filter the users based on the search query and update the search results

  return (
    <header>
      <br></br>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name,email or role"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </header>
  );
}

export default Header;
