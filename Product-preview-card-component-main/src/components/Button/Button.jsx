import IButton from "./interface";

const Button = ({
  handleClick = () => {},
  children,
  styleObj: { style, name },
  isOnCart,
}) => {
  return (
    <button
      className={`${style[name]} btn ${isOnCart ? style.active : ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = IButton;

export default Button;
