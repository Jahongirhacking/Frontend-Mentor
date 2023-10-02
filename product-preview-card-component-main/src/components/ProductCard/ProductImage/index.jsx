import Component from "./ProductImage";
import "./style.scss";
import IProductImage from "./interface";

const ProductImage = (props) => {
  return <Component {...props} />;
};

ProductImage.propTypes = IProductImage;

export default ProductImage;
