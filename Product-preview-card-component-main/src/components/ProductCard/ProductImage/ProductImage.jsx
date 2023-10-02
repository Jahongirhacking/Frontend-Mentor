import IProductImage from "./interface";

const ProductImage = ({ desktopImage, mobileImage }) => {
  return (
    <picture className="product_img-container">
      <source media="(max-width:600px)" srcSet={mobileImage} />
      <img src={desktopImage} alt="product image" />
    </picture>
  );
};

ProductImage.propTypes = IProductImage;

export default ProductImage;
