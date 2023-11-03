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
        <box-icon color="black" name="cart" size="md" type="logo"></box-icon>
      </button>
      {open && (
        <div className={styles.cartContainer}>
          <h1 onMouseDown={handleCloseOnDocument}>Your Items</h1>
          <hr />
          <ul className={styles.cartItemsContainer}>
            {MenBagsObj.map((item) => (
              <li key={item.id} className={styles.cartItems}>
                <img src={item.image1} />
                <p className={styles.itemName}>{item.name}</p>

                <span className={styles.itemPrice}>{item.price} </span>
                <p className={styles.itemQuantity}>Quantity 2</p>
                <div className={styles.countBtn}>
                  <button>-</button>
                  <button>+</button>
                </div>
                <hr className={styles.listLine} />
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
