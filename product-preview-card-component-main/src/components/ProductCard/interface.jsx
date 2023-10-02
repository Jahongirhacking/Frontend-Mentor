import PropTypes from "prop-types";

const IProductCard = {
  productCard: PropTypes.shape({
    desktopImage: PropTypes.string,
    mobileImage: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    info: PropTypes.string,
    oldPrice: PropTypes.number,
    price: PropTypes.number,
  }),
};

export default IProductCard;
