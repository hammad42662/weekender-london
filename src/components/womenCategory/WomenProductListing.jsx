import WomensHeading from "./WomensHeading";
import WomenBagsObj from "./WomenBagsObj";
import ProductListing from "../ReusableComponents/ProductListings";
import { useState } from "react";
function WomenProductListing() {
  const [product] = useState([...WomenBagsObj]);

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
