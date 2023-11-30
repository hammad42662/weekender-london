import styles from "./Footer.module.css";
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
          <ul className={styles.socialIcons}>
            <li>
              <a href="https://facebook.com">
                <BiLogoFacebookCircle
                  color="white"
                  size="1.5rem"
                  className={styles.searchIcon}
                />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <BiLogoInstagram
                  color="white"
                  size="1.5rem"
                  className={styles.searchIcon}
                />
              </a>
            </li>
            <li>
              <a href="https://x.com">
                <BiLogoTwitter
                  color="white"
                  size="1.5rem"
                  className={styles.searchIcon}
                />
              </a>
            </li>
            <li>
              <a href="https://pinterest.com">
                <BiLogoPinterest
                  color="white"
                  size="1.5rem"
                  className={styles.searchIcon}
                />
              </a>
            </li>
            <li>
              <a href="https://youtube.com">
                <BiLogoYoutube
                  color="white"
                  size="1.5rem"
                  className={styles.searchIcon}
                />
              </a>
            </li>
          </ul>
        </li>
        <li>
          <hr className={styles.hr} />
        </li>
        <li>
          <ul className={styles.socialButtons}>
            <li>
              <a href="https://apps.apple.com/gb/app/apple-store/id375380948">
                <img
                  src="/assets/download-badge/apple-badge.svg"
                  alt="download app button"
                  className={styles.appleBtn}
                />
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/games?hl=en&gl=US&pli=1">
                <img
                  src="/assets/download-badge/google-badge.png"
                  alt="download app button"
                  className={styles.googleBtn}
                />
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <hr className={styles.bottomHr} />
      <p> This website is &copy; of Hammad Afzal </p>
    </footer>
  );
}
export default Footer;
