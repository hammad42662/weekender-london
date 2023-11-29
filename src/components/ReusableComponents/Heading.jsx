import styles from "./Heading.module.css";
function Heading({ title, paragraph }) {
  return (
    <>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.desc}>{paragraph}</p>
    </>
  );
}
export default Heading;
