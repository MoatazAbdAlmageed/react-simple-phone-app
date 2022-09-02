import "./App.css";

import React, { useState } from "react";

import List from "./components/users/List/List/List";

const userData = [
  { name: "John", email: "john@example.com", phone: "01150064746" },
  { name: "Ali", email: "Ali@example.com", phone: "01150064747" },
  { name: "Moataz", email: "Moataz@example.com", phone: "01150064748" },
  { name: "Omar", email: "Omar@example.com", phone: "01150064749" },
  { name: "Eman", email: "Eman@example.com", phone: "01150064744" },
  { name: "Hamzza", email: "Hamzza@example.com", phone: "01150064742" },
];
function App() {
  const [users, setUsers] = useState(userData);
  const [search, setSearch] = useState("");

  function handleDelete(email) {
    setUsers(users.filter((user) => user.email !== email));
  }

  function handleEdit() {
    alert("handleEdit");
  }
  function handleClearSearch() {
    setSearch("");
    setUsers(userData);
  }

  function handleSearch({ target }) {
    if (target.value === "") {
      setSearch("");
      setUsers(userData);
    } else {
      setSearch(target.value);
      setUsers(
        users.filter(
          ({ name, email, phone }) =>
            name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            phone.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
            email.toLocaleLowerCase().includes(search.toLocaleLowerCase())
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
        handleClearSearch={handleClearSearch}
        search={search}
      />
    </div>
  );
}

export default App;
