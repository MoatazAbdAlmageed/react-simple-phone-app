import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import React from "react";
import { StyledUser } from "./User.styles";
import { confirmAlert } from "react-confirm-alert"; // Import

const User = ({ name, email, phone, handleDelete, handleEdit }) => (
  <StyledUser>
    <h1>{name}</h1>
    <p>{email}</p>
    <p>{phone}</p>
    <button
      onClick={() => {
        confirmAlert({
          title: "Confirm to Delete",
          message: `Are you sure you want to delete ${name}?`,
          buttons: [
            {
              label: "Yes",
              onClick: () => handleDelete(email),
            },
            {
              label: "No",
              // onClick: () => alert('Click No')
            },
          ],
        });
      }}
    >
      Delete
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
