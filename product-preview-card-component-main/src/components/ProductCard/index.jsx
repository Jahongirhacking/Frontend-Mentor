import Component from "./ProductCard";
import "./style.scss";
import IProductCard from "./interface";

const ProductCard = ({ productCard }) => {
  return <Component {...productCard} />;
};

ProductCard.propTypes = IProductCard;

export default ProductCard;
