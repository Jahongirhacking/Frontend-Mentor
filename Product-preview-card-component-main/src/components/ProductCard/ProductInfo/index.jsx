import Component from "./ProductInfo";
import "./style.scss";
import IProductCard from "../interface";

const ProductInfo = (props) => {
  return <Component {...props} />;
};

ProductInfo.propTypes = IProductCard;

export default ProductInfo;
