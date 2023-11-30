import AccessoriesHeading from "./AccessoriesHeading";
import AccesoriesObj from "./AccessoriesObj";

import ProductListing from "../ReusableComponents/ProductListings";
import { useState } from "react";

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
