import { StyledButton, StyledInput } from "../../global/global.styles";

import React from "react";

const Add = ({ handleChangeForm, submitAddUser }) => (
  <div className="AddWrapper">
    <h2>add new user</h2>
    <form onSubmit={submitAddUser} onChange={handleChangeForm}>
      <label htmlFor="name">Name</label>
      <StyledInput
        type="text"
        className="form-control"
        placeholder="name"
        name="name"
      />
      <label htmlFor="email">Email</label>
      <StyledInput
        type="email"
        className="form-control"
        placeholder="email"
        name="email"
      />{" "}
      <label htmlFor="phone">Phone</label>
      <StyledInput
        type="phone"
        className="form-control"
        placeholder="phone"
        name="phone"
      />
      <StyledButton>Add</StyledButton>
    </form>
  </div>
);

Add.propTypes = {
  // bla: PropTypes.string,
};

Add.defaultProps = {
  // bla: 'test',
};

export default Add;
