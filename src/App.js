import "./App.css";

import React, { useState } from "react";

import List from "./components/users/List/List/List";

const userData = [
  { name: "John", email: "john@example.com" },
  { name: "Ali", email: "Ali@example.com" },
  { name: "Moataz", email: "Moataz@example.com" },
  { name: "Omar", email: "Omar@example.com" },
  { name: "Eman", email: "Eman@example.com" },
  { name: "Hamzza", email: "Hamzza@example.com" },
];
function App() {
  const [users, setUsers] = useState(userData);

  function handleDelete(email) {
    setUsers(users.filter((user) => user.email !== email));
  }

  function handleEdit() {
    alert("handleEdit");
  }

  function handleSearch({ target }) {
    if (target.value === "") {
      setUsers(userData);
    } else {
      setUsers(
        users.filter((user) =>
          user.email
            .toLocaleLowerCase()
            .includes(target.value.toLocaleLowerCase())
        )
      );
    }
  }

  return (
    <div className="App">
      <List
        users={users}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;
