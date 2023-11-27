import styles from "./Button.module.css";
function Button({ children, color, onClick, margin, padding }) {
  return (
    <button
      className={styles.btn}
      style={{ backgroundColor: color, margin: margin, padding: padding }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
