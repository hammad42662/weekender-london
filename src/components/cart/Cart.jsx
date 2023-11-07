import { useContext, useReducer, useState } from "react";
import styles from "./Cart.module.css";
// import MenBagsObj from "../menCategory/MenBagsObject";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { CartContext } from "../../context/CartContext";
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      if (state.count <= 0) {
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
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const { cartItems, setCartItems } = useContext(CartContext);
  function handleToggleModal() {
    setOpen(!open);
  }
  function handleCloseOnDocument() {
    setOpen(false);
  }

  const inc = function (itemId) {
    dispatch({ type: "inc", payload: 1 });
    updateItemCount(itemId, count + 1);
  };
  const dec = function (itemId) {
    dispatch({ type: "dec", payload: 1 });
    updateItemCount(itemId, count - 1);
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
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItems}>
                <img src={item.image1} />
                <p className={styles.itemName}>{item.name}</p>

                <span className={styles.itemPrice}>£{item.price * count} </span>
                {console.log(item.price)}
                <p className={styles.itemQuantity}>Quantity {count}</p>
                <div className={styles.countBtn}>
                  <button onClick={() => dec(item.id)}>-</button>
                  <button onClick={() => inc(item.id)}>+</button>
                </div>
                <hr className={styles.listLine} />
              </li>
            ))}
          </ul>
          <h3>Total:£{total}</h3>
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
