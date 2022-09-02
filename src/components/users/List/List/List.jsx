import Add from "../../Add/Add";
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
}) => (
  <StyledList className="ListWrapper">
    <h1>Phone Books</h1>

    <input
      placeholder="Search by email"
      type="text"
      className="search"
      onChange={handleSearch}
      value={search}
    />
    {search && (
      <>
        {!users.length && <p>No Users found</p>}
        <button onClick={handleClearSearch}>Clear</button>
      </>
    )}

    <Add handleChangeForm={handleChangeForm} submitAddUser={submitAddUser} />
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
