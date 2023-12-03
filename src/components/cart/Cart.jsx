import { useContext, useReducer, useState } from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { CartContext } from "../../context/CartContext";

// function reducer(state, action) {
//   switch (action.type) {
//     case "inc":
//       return { ...state, count: state.count + 1 };
//     case "dec":
//       if (state.count <= 1) {
//         return state;
//       }
//       return { ...state, count: state.count - 1 };

//     default:
//       throw new Error("Unknown action");
//   }
// }

function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    getCartTotal,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const toggle = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <BiCart
        color="red"
        size="2.4rem"
        onClick={toggle}
        className={styles.basketBtn}
      />

      {showModal && (
        <div className={styles.cartContainer}>
          <h1>Your Items</h1>
          <hr />

          <ul className={styles.cartItemsContainer}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItems}>
                <img src={item.image1} alt={item.name} />
                <p className={styles.itemName}>{item.name}</p>

                <span className={styles.itemPrice}>£{item.price}</span>

                <p className={styles.itemQuantity}>Quantity: {item.quantity}</p>
                <div className={styles.countBtn}>
                  <button
                    onClick={() => {
                      decreaseQuantity(item);
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      increaseQuantity(item);
                    }}
                  >
                    +
                  </button>
                  <button
                    className={styles.closeButton}
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    &times;
                  </button>
                </div>

                <hr className={styles.listLine} />
              </li>
            ))}
          </ul>

          <div className={styles.totalContainer}>
            <h3>Total: £{getCartTotal()}</h3>
            <Link to="/cart">
              <button className={styles.checkoutButton}>Check Out Now</button>
            </Link>
          </div>

          <div className={styles.closeButtonContainer}>
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
