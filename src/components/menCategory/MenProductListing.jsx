import MenHeading from "./MenHeading";
import MenBagsObj from "./MenBagsObject";
import ProductListing from "../ReusableComponents/ProductListings";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

function MenProductListing() {
  const [product, setProduct] = useState([...MenBagsObj]);
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (clickedProduct) => {
    console.log(
      `Product added to cart: ${clickedProduct.name} (Men's category)`
    );
  };

  return (
    <>
      <MenHeading />
      <ProductListing products={product} onAddToCart={addToCart} />
    </>
  );
}

export default MenProductListing;
