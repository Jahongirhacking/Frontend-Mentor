import IProductCard from "../interface";
import Pricing from "../Pricing";
import ProductButton from "../ProductButton";
import Heading from "../Heading";

const ProductInfo = (productCard) => {
  const { name, type, info, price, oldPrice, handleClick, isOnCart } =
    productCard;

  return (
    <aside className="product-info">
      <Heading name={name} type={type} info={info} />
      <Pricing price={price} oldPrice={oldPrice} />
      <ProductButton handleClick={handleClick} isOnCart={isOnCart} />
    </aside>
  );
};

ProductInfo.propTypes = IProductCard;

export default ProductInfo;
