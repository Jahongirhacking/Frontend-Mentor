import IPricing from "./interface";

const Pricing = ({ price, oldPrice }) => {
  return (
    <section className="product-pricing">
      <strong className="product__price">${price}</strong>
      <del className="product__oldPrice">${oldPrice}</del>
    </section>
  );
};

Pricing.propTypes = IPricing;

export default Pricing;
