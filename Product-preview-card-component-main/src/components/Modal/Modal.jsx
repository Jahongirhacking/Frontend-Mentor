import IModal from "./interface";

const Modal = ({ children }) => {
  return <section className="modal">{children}</section>;
};

Modal.propTypes = IModal;

export default Modal;
