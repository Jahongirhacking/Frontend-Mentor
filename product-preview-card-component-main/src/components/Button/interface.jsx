import PropTypes from "prop-types";

const IButton = {
  handleClick: PropTypes.func,
  children: PropTypes.object,
  styleObj: PropTypes.shape({
    style: PropTypes.object,
    name: PropTypes.string,
  }),
  isOnCart: PropTypes.bool,
};

export default IButton;
