import { useEffect, useState } from "react";
import Modal from "../../Modal";
import IModal from "../../Modal/interface";

const ProductModal = ({ children, modalView, isOnCart }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    // mount
    setIsShowModal(true);
    const timeoutID = setTimeout(() => setIsShowModal(false), 5000);
    // unmount
    return () => {
      clearTimeout(timeoutID);
      setIsShowModal(false);
    };
  }, [isOnCart]);

  return isShowModal && <Modal modalView={modalView}>{children}</Modal>;
};

ProductModal.propTypes = IModal;

export default ProductModal;
