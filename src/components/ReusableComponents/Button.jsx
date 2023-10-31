import styles from "./Button.module.css";
function Button({ children, color, onClick }) {
  return (
    <button
      className={styles.btn}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
