import IHeading from "./interface";

const Heading = ({ name, type, info }) => {
  return (
    <header className="product-heading">
      <h1 className="product__name">{name}</h1>
      <h3 className="product__type">{type.toUpperCase()}</h3>
      <p className="product__info">{info}</p>
    </header>
  );
};

Heading.propTypes = IHeading;

export default Heading;
