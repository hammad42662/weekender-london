import MenHeading from "./MenHeading";
import MenBagsObj from "./MenBagsObject";
import ProductListing from "../ReusableComponents/ProductListings";
import { useState } from "react";

function MenProductListing() {
  const [product, setProduct] = useState([...MenBagsObj]);

  const handleAddToCart = (clickedProduct) => {
    console.log(
      `Product added to cart: ${clickedProduct.name} (Men's category)`
    );
  };

  return (
    <>
      <MenHeading />
      <ProductListing products={product} onAddToCart={handleAddToCart} />
    </>
  );
}

export default MenProductListing;
