import React from "react";
import { StyledButton } from "../global.styles";
import { StyledModal } from "./Modal.styles";

const Modal = ({ children, handleShowAddModal }) => (
  <StyledModal className="ModalWrapper">
    <StyledButton onClick={handleShowAddModal}>Close</StyledButton>
    {children}
  </StyledModal>
);

Modal.propTypes = {
  // bla: PropTypes.string,
};

Modal.defaultProps = {
  // bla: 'test',
};

export default Modal;
