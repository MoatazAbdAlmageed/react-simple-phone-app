import { StyledButton, StyledInput } from "../../../global/global.styles";

import Add from "../../Add/Add";
import Modal from "../../../global/Modal/Modal";
import React from "react";
import { StyledList } from "./List.styles";
import User from "../../User/User/User";

const List = ({
  users,
  handleDelete,
  handleEdit,
  handleSearch,
  handleClearSearch,
  search,
  submitAddUser,
  handleChangeForm,
  showAddModal,
  handleShowAddModal,
}) => (
  <StyledList className="ListWrapper">
    <h1>Phone Books</h1>

    <StyledInput
      placeholder="Search by email"
      type="text"
      className="search"
      onChange={handleSearch}
      value={search}
    />
    {search && (
      <>
        {!users.length && <p>No Users found</p>}
        <StyledButton onClick={handleClearSearch}>Clear</StyledButton>
      </>
    )}

    <StyledButton onClick={handleShowAddModal}>Add User</StyledButton>
    {showAddModal && (
      <Modal handleShowAddModal={handleShowAddModal}>
        <Add
          handleChangeForm={handleChangeForm}
          submitAddUser={submitAddUser}
        />
      </Modal>
    )}
    {users.map(({ name, email, phone }) => (
      <User
        key={email}
        name={name}
        email={email}
        phone={phone}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      ></User>
    ))}
  </StyledList>
);

List.propTypes = {
  // bla: PropTypes.string,
};

List.defaultProps = {
  // bla: 'StyledList',
};

export default List;
