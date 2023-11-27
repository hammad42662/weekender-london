import styles from "./footer.module.css";
import {
  BiLogoFacebookCircle,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoYoutube,
} from "react-icons/bi";
function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialLinks}>
        <li>
          <a href="https://facebook.com">
            <BiLogoFacebookCircle
              color="white"
              size="2rem"
              className={styles.searchIcon}
            />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://instagram.com">
            <BiLogoInstagram
              color="white"
              size="2rem"
              className={styles.searchIcon}
            />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://x.com">
            <BiLogoTwitter
              color="white"
              size="2rem"
              className={styles.searchIcon}
            />
          </a>
        </li>
        <li>
          <a href="https://pinterest.com">
            <BiLogoPinterest
              color="white"
              size="2rem"
              className={styles.searchIcon}
            />
          </a>
        </li>
        <li>
          <a href="https://youtube.com">
            <BiLogoYoutube
              color="white"
              size="2rem"
              className={styles.searchIcon}
            />
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
