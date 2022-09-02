import React from "react";
//import { Test } from './List.styles';

const List = ({ users, handleDelete, handleEdit, handleSearch }) => (
  <div className="ListWrapper">
    <h1>Users</h1>

    <input
      placeholder="Search by email"
      type="text"
      className="search"
      onChange={handleSearch}
    />
    {users.map(({ name, email }) => (
      <div key={email}>
        <h1>{name}</h1>
        <p>{email}</p>
        <button
          onClick={() => {
            const confirm = window.confirm(
              "Are you sure you want to delete this user?"
            );
            if (confirm) {
              return handleDelete(email);
            }
          }}
        >
          Remove
        </button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    ))}
  </div>
);

List.propTypes = {
  // bla: PropTypes.string,
};

List.defaultProps = {
  // bla: 'test',
};

export default List;
