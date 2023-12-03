import AccessoriesHeading from "./AccessoriesHeading";
import AccesoriesObj from "./AccessoriesObj";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ProductListing from "../ReusableComponents/ProductListings";

function AccessoriesProductListing() {
  const [product, setProduct] = useState([...AccesoriesObj]);
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (clickedProduct) => {
    console.log(
      `Product added to cart: ${clickedProduct.name} (Accesories category)`
    );
  };

  return (
    <>
      <AccessoriesHeading />
      <ProductListing products={product} onAddToCart={addToCart} />
    </>
  );
}

export default AccessoriesProductListing;
