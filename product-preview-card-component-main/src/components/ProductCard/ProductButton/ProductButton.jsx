import Button from "../../Button";
import style from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import IButton from "../../Button/interface";

const ProductButton = ({ isOnCart, handleClick }) => {
  return (
    <>
      <Button
        handleClick={handleClick}
        isOnCart={isOnCart}
        styleObj={{ style, name: "product-btn" }}
      >
        {isOnCart ? (
          <>
            <FontAwesomeIcon icon={faTrash} style={{ marginRight: "7px" }} />
            Remove from Cart
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ marginRight: "7px" }}
            />
            Add to Cart
          </>
        )}
      </Button>
    </>
  );
};

ProductButton.propTypes = IButton;

export default ProductButton;
