import styles from "./footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialLinks}>
        <li>
          <a href="https://facebook.com">
            <box-icon name="facebook" type="logo" color="white"></box-icon>
          </a>
        </li>
        <li>
          {" "}
          <a href="https://instagram.com">
            <box-icon name="instagram-alt" type="logo" color="white"></box-icon>
          </a>
        </li>
        <li>
          {" "}
          <a href="https://x.com">
            <box-icon name="twitter" type="logo" color="white"></box-icon>
          </a>
        </li>
        <li>
          {" "}
          <a href="https://pinterest.com">
            <box-icon name="pinterest-alt" type="logo" color="white"></box-icon>
          </a>
        </li>
        <li>
          {" "}
          <a href="https://youtube.com">
            <box-icon name="youtube" type="logo" color="white"></box-icon>
          </a>
        </li>
        <li>
          <hr className={styles.hr} />
        </li>
        <li>
          <a href="https://apps.apple.com/gb/app/apple-store/id375380948">
            <img
              src="../public/assets/download-badge/apple-badge.svg"
              alt="download app button"
              className={styles.appleBtn}
            />
          </a>
        </li>
        <li>
          <a href="https://play.google.com/store/games?hl=en&gl=US&pli=1">
            <img
              src="../public/assets/download-badge/google-badge.png"
              alt="download app button"
              className={styles.googleBtn}
            />
          </a>
        </li>
      </ul>
      <hr className={styles.bottomHr} />
      <p> This website is &copy; of Hammad Afzal </p>
    </footer>
  );
}
export default Footer;
