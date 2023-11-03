import { useReducer, useState } from "react";
import styles from "./Cart.module.css";
import MenBagsObj from "../menCategory/MenBagsObject";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
function reducer(state, action) {
  console.log(state, action);
}
function Cart() {
  const [count, dispatch] = useReducer(reducer, 0);
  const [open, setOpen] = useState(false);
  function handleToggleModal() {
    setOpen(!open);
    console.log(open ? "close" : "open");
  }
  function handleCloseOnDocument() {
    setOpen(false);

    const inc = function () {};
  }
  return (
    <>
      <button onClick={handleToggleModal} className={styles.basketBtn}>
        <BiCart color="black" size="2rem" />
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
          <h3>Total:£50</h3>
          <Link to="/cart">
            <button className={styles.checkoutButton}>Check Out Now</button>
          </Link>

          <div>
            <button className={styles.closeButton} onClick={handleToggleModal}>
              &times; Minimize
            </button>
          </div>
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
