import React, { useState } from "react";
import MenHeading from "./MenHeading";
import MenBagsObj from "./MenBagsObject";
import ProductListing from "../ReusableComponents/ProductListings";

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
