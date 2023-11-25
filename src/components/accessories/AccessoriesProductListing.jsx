import AccessoriesHeading from "./AccessoriesHeading";
import AccesoriesObj from "./AccessoriesObj";
import React, { useState } from "react";
import ProductListing from "../ReusableComponents/ProductListings";

function AccessoriesProductListing() {
  const [product, setProduct] = useState([...AccesoriesObj]);

  const handleAddToCart = (clickedProduct) => {
    console.log(
      `Product added to cart: ${clickedProduct.name} (Accesories category)`
    );
  };

  return (
    <>
      <AccessoriesHeading />
      <ProductListing products={product} onAddToCart={handleAddToCart} />
    </>
  );
}

export default AccessoriesProductListing;
