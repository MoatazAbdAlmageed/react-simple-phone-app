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
  const [showAddModal, setShowAddModal] = useState(false);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});

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

  function handleChangeForm({ target }) {
    setUser({ ...user, [target.name]: target.value });
  }
  function submitAddUser(e) {
    e.preventDefault();
    console.log("submitAddUser");
    console.log("user");
    console.log(user);
    setUsers([...users, user]);
    console.log("users");
    console.log(users);
    setShowAddModal(false);
  }
  function handleShowAddModal(e) {
    setShowAddModal(!showAddModal);
  }

  function handleSearch({ target }) {
    if (target.value === "") {
      setSearch("");
      setUsers(users);
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
        handleChangeForm={handleChangeForm}
        submitAddUser={submitAddUser}
        showAddModal={showAddModal}
        handleShowAddModal={handleShowAddModal}
      />
    </div>
  );
}

export default App;
