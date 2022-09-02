import React from "react";
import { StyledUser } from "./User.styles";

const User = ({ name, email, phone, handleDelete, handleEdit }) => (
  <StyledUser>
    <h1>{name}</h1>
    <p>{email}</p>
    <p>{phone}</p>
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
  </StyledUser>
);

User.propTypes = {
  // bla: PropTypes.string,
};

User.defaultProps = {
  // bla: 'test',
};

export default User;
