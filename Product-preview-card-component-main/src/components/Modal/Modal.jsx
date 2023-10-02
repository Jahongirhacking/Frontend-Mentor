import IModal from "./interface";

const Modal = ({ children, modalView }) => {
  return <section className={`modal ${modalView}`}>{children}</section>;
};

Modal.propTypes = IModal;

export default Modal;
