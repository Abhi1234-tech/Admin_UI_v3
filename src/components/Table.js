import React from "react";

function Table({
  users,
  setUsers,
  selectedRows,
  toggleRowSelection,
  currentPage,
  rowsPerPage
}) {
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const visibleUsers = users.slice(startIndex, endIndex);

  const handleEditUser = (userId, fieldName, value) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? { ...user, [fieldName]: value, isEditing: true }
          : user
      )
    );
  };

  const handleSaveUser = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isEditing: false } : user
      )
    );
  };

  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {visibleUsers.map((user) => (
          <tr
            key={user.id}
            className={selectedRows.includes(user.id) ? "selected" : ""}
          >
            <td>
              <input
                type="checkbox"
                checked={selectedRows.includes(user.id)}
                onChange={() => toggleRowSelection(user.id)}
              />
            </td>
            <td>
              {user.isEditing ? (
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) =>
                    handleEditUser(user.id, "name", e.target.value)
                  }
                />
              ) : (
                user.name
              )}
            </td>
            <td>
              {user.isEditing ? (
                <input
                  type="text"
                  value={user.email}
                  onChange={(e) =>
                    handleEditUser(user.id, "email", e.target.value)
                  }
                />
              ) : (
                user.email
              )}
            </td>
            <td>
              {user.isEditing ? (
                <input
                  type="text"
                  value={user.role}
                  onChange={(e) =>
                    handleEditUser(user.id, "role", e.target.value)
                  }
                />
              ) : (
                user.role
              )}
            </td>
            <td>
              {user.isEditing ? (
                <button onClick={() => handleSaveUser(user.id)}>Save</button>
              ) : (
                <button onClick={() => handleEditUser(user.id)}>Edit</button>
              )}
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
