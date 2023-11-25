import WomensHeading from "./WomensHeading";
import WomenBagsObj from "./WomenBagsObj";
import React, { useState } from "react";
import ProductListing from "../ReusableComponents/ProductListings";

function WomenProductListing() {
  const [product, setProduct] = useState([...WomenBagsObj]);

  const handleAddToCart = (clickedProduct) => {
    console.log(
      `Product added to cart: ${clickedProduct.name} (Women's category)`
    );
  };

  return (
    <>
      <WomensHeading />
      <ProductListing products={product} onAddToCart={handleAddToCart} />
    </>
  );
}

export default WomenProductListing;
