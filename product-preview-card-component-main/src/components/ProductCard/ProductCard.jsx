import { useState } from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import IProductCard from "./interface";
import ProductModal from "./ProductModal";

const ProductCard = (productCard) => {
  const [isOnCart, setIsOnCart] = useState(false);

  const handleClick = () => {
    setIsOnCart((prev) => !prev);
  };

  const { desktopImage, mobileImage } = productCard;
  return (
    <>
      <div className="product-card">
        <ProductImage desktopImage={desktopImage} mobileImage={mobileImage} />
        <ProductInfo
          {...productCard}
          isOnCart={isOnCart}
          handleClick={handleClick}
        />
      </div>
      {isOnCart && (
        <ProductModal>Your product is successfully added to Cart!</ProductModal>
      )}
    </>
  );
};

ProductCard.propTypes = IProductCard;

export default ProductCard;
