import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <section className={styles.footer}>
        <div>
          <h2>Shortly</h2>
        </div>
        <div>
          <span>Features</span>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <span>Resources</span>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <span>Company</span>
          <ul>
            <li>About</li>
            <li>Our Tean</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.footer_socials}>
          <img src="icon-facebook.svg" alt="facebook" />
          <img src="icon-twitter.svg" alt="twiter" />
          <img src="icon-pinterest.svg" alt="pintrest" />
          <img src="icon-instagram.svg" alt="instagram" />
        </div>
      </section>
      <span className={styles.copyright}>
        Coded by:
        <a href="https://github.com/fariidlotfi" target="_blank">
          Farid Lotfi
        </a>
      </span>
    </footer>
  );
}
