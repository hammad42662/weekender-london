import { useState } from "react";
import styles from "./Cart.module.css";

function Cart() {
  const [open, setOpen] = useState(false);
  function handleToggleModal() {
    setOpen(!open);
    console.log(open ? "Open" : "close");
  }

  return (
    <>
      <button onClick={handleToggleModal}>Basket</button>
      {open && (
        <div className={styles.cardContainer}>
          <h1>Hi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla
            ipsam temporibus maxime optio consectetur molestiae eaque. Quas
            maiores sed deserunt, voluptatibus sequi alias eum, voluptate
            consequatur molestias esse expedita.
          </p>
          <div className={styles.cartContent}></div>
          <button className={styles.button} onClick={handleToggleModal}>
            &times; afjlnsafjnl
          </button>
        </div>
      )}
    </>
  );
}
export default Cart;
