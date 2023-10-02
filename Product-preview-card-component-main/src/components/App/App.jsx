import ProductCard from "../ProductCard";
import desktopImage from "../../assets/images/image-product-desktop.jpg";
import mobileImage from "../../assets/images/image-product-mobile.jpg";

const productCard = {
  desktopImage,
  mobileImage,
  type: "perfume",
  name: "Gabrielle Essence Eau De Parfum",
  info: `A floral, solar and voluptuous interpretation composed by Olivier Polge, 
    Perfumer-Creator for the House of CHANEL.`,
  oldPrice: 169.99,
  price: 149.99,
};

const App = () => {
  return (
    <>
      <ProductCard productCard={productCard} />
    </>
  );
};

export default App;
