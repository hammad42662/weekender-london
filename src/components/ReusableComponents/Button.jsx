import styles from "./Button.module.css";
function Button({ children, color, onClick, margin }) {
  return (
    <button
      className={styles.btn}
      style={{ backgroundColor: color, margin: margin }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
