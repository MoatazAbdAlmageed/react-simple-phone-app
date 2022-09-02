import React from "react";
//import { Test } from './Add.styles';

const Add = ({ handleChangeForm, submitAddUser }) => (
  <div className="AddWrapper">
    <h2>add new user</h2>
    <form onSubmit={submitAddUser} onChange={handleChangeForm}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="name"
        name="name"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="email"
        name="email"
      />{" "}
      <label htmlFor="phone">Phone</label>
      <input
        type="phone"
        className="form-control"
        placeholder="phone"
        name="phone"
      />
      <button>Add</button>
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
