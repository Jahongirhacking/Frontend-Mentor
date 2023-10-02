import { useState } from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import IProductCard from "./interface";
import ProductModal from "./ProductModal";

const ProductCard = (productCard) => {
  const [isOnCart, setIsOnCart] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setIsOnCart((prev) => !prev);
  };

  const { desktopImage, mobileImage } = productCard;

  const modal = isOnCart ? (
    <ProductModal modalView={"success"} isOnCart={isOnCart}>
      Your product is successfully added to Cart!
    </ProductModal>
  ) : (
    <ProductModal modalView={"danger"} isOnCart={isOnCart}>
      The product is removed from Cart!
    </ProductModal>
  );
  return (
    <>
      <article className="product-card">
        <ProductImage desktopImage={desktopImage} mobileImage={mobileImage} />
        <ProductInfo
          {...productCard}
          isOnCart={isOnCart}
          handleClick={handleClick}
        />
      </article>
      {isClicked && modal}
    </>
  );
};

ProductCard.propTypes = IProductCard;

export default ProductCard;
