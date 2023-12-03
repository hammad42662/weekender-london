import WomensHeading from "./WomensHeading";
import WomenBagsObj from "./WomenBagsObj";
import ProductListing from "../ReusableComponents/ProductListings";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
function WomenProductListing() {
  const [product] = useState([...WomenBagsObj]);
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (clickedProduct) => {
    console.log(
      `Product added to cart: ${clickedProduct.name} (Women's category)`
    );
  };

  return (
    <>
      <WomensHeading />
      <ProductListing products={product} onAddToCart={addToCart} />
    </>
  );
}

export default WomenProductListing;
