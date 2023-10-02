import { useEffect, useState } from "react";
import Modal from "../../Modal";
import IModal from "../../Modal/interface";

const ProductModal = ({ children }) => {
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
  }, []);

  return isShowModal && <Modal>{children}</Modal>;
};

ProductModal.propTypes = IModal;

export default ProductModal;
