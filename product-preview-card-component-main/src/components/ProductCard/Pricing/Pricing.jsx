import IPricing from "./interface";

const Pricing = ({ price, oldPrice }) => {
  return (
    <summary className="product-pricing">
      <strong className="product__price">${price}</strong>
      <del className="product__oldPrice">${oldPrice}</del>
    </summary>
  );
};

Pricing.propTypes = IPricing;

export default Pricing;
