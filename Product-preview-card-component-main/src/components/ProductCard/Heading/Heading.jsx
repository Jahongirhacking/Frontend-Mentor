import IHeading from "./interface";

const Heading = ({ name, type, info }) => {
  return (
    <header className="product-heading">
      <h1 className="product__name">{name}</h1>
      <h2 className="product__type">{type.toUpperCase()}</h2>
      <p className="product__info">{info}</p>
    </header>
  );
};

Heading.propTypes = IHeading;

export default Heading;
