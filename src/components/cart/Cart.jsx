import { useState } from "react";
import styles from "./Cart.module.css";
import MenBagsObj from "../menCategory/MenBagsObject";

function Cart() {
  const [open, setOpen] = useState(false);
  function handleToggleModal() {
    setOpen(!open);
    console.log(open ? "close" : "open");
  }
  function handleCloseOnDocument() {
    setOpen(false);
  }
  return (
    <>
      <button onClick={handleToggleModal} className={styles.basketBtn}>
        Basket
      </button>
      {open && (
        <div className={styles.cartContainer}>
          <h1 onMouseDown={handleCloseOnDocument}>Your Items</h1>
          <hr />
          <ul>
            {MenBagsObj.map((item) => (
              <li key={item.id}>
                <img src={item.image1} />
                <p>{item.name}</p>
                <span>{item.price} </span>
                <button>Remove Item</button>
                <hr />
              </li>
            ))}
          </ul>
          <a href="/checkout">Check Out Now!</a>

          <div className={styles.cartContent}></div>
          <button className={styles.button} onClick={handleToggleModal}>
            &times; Close
          </button>
        </div>
      )}
    </>
  );
}
export default Cart;
{
  /* <img src="../public/images/menbags/his-carry-all.jpg" />
<p>Backpack Side Pocket</p>
<span>$35</span>
  <button>Remove Item</button> */
}
