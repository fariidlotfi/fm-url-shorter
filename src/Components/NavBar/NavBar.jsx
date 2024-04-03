import { useState } from "react";
import Button from "../Button/Button";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [height, setHeight] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__texts}>
        <h1 className={styles.logo}>Shortly</h1>

        <ul className={styles.menu}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <div className={styles.buttons}>
        <Button title={"Login"} background={false} />
        <Button title={"Sign Up"} background={true} />
      </div>

      <img
        src="menu.svg"
        alt="menu-icon"
        className={`${styles.menu_expander}`}
        onClick={() => setHeight(!height)}
      />
      <div
        className={styles.expand_menu}
        style={{
          height: height ? "300px" : "0",
        }}
      >
        <h1 className={styles.logo}>Shortly</h1>
        <ul className={styles.expand_menu__menu}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <Button title={"Login"} background={false} color={"white"} />
        <Button title={"Sign Up"} background={true} />
      </div>
    </nav>
  );
}
