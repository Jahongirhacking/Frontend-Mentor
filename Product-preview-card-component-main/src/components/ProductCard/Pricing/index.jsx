import Component from "./Pricing";
import "./style.scss";
import IPricing from "./interface";

const Pricing = (props) => {
  return <Component {...props} />;
};

Pricing.propTypes = IPricing;

export default Pricing;
