import { useContext, useReducer, useState } from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { CartContext } from "../../context/CartContext";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      if (state.count <= 1) {
        return state;
      }
      return { ...state, count: state.count - 1 };

    default:
      throw new Error("Unknown action");
  }
}

function Cart() {
  const initialState = { count: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;
  const { cartItems, setCartItems } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const total = cartItems.reduce((acc, item) => acc + item.total, 0);

  const handleToggleModal = () => {
    setOpen(!open);
  };

  const handleCloseOnDocument = () => {
    setOpen(false);
  };

  const updateItemCount = (itemId, newCount) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId
          ? { ...item, count: newCount, total: item.price * newCount }
          : item
      )
    );
  };

  const inc = function (itemId) {
    dispatch({ type: "inc", payload: 1 });
    updateItemCount(itemId, count + 1);
  };

  const dec = function (itemId) {
    dispatch({ type: "dec", payload: 1 });
    updateItemCount(itemId, count - 1);
  };

  return (
    <>
      <BiCart
        color={count === 1 ? "#FFECD1" : "red"}
        size="2.4rem"
        onClick={handleToggleModal}
        className={styles.basketBtn}
      />

      {open && (
        <div className={styles.cartContainer}>
          <h1 onMouseDown={handleCloseOnDocument}>Your Items</h1>
          <hr />

          <ul className={styles.cartItemsContainer}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItems}>
                <img src={item.image1} alt={item.name} />
                <p className={styles.itemName}>{item.name}</p>

                <span className={styles.itemPrice}>£{item.price * count}</span>

                <p className={styles.itemQuantity}>Quantity: {count}</p>
                <div className={styles.countBtn}>
                  <button onClick={() => dec(item.id)}>-</button>
                  <button onClick={() => inc(item.id)}>+</button>
                </div>

                <hr className={styles.listLine} />
              </li>
            ))}
          </ul>

          <div className={styles.totalContainer}>
            <h3>Total: £{total}</h3>
            <Link to="/cart">
              <button className={styles.checkoutButton}>Check Out Now</button>
            </Link>
          </div>

          <div className={styles.closeButtonContainer}>
            <button className={styles.closeButton} onClick={handleToggleModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
