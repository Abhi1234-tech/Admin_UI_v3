import React from "react";

function SelectDeleteButtons({
  selectedRows,
  users,
  handleSelectAll,
  handleDeleteAll
}) {
  return (
    <div className="select-delete-container">
      <div className="select-delete-buttons">
        <button onClick={handleSelectAll}>
          {selectedRows.length === users.length ? "Deselect All" : "Select All"}
        </button>
        <button onClick={handleDeleteAll}>Delete All</button>
      </div>
    </div>
  );
}

export default SelectDeleteButtons;
