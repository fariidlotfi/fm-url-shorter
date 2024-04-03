import Button from "../Button/Button";
import styles from "./styles.module.css";

export default function FooterBoostSection() {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Boost your links today.</h1>
      <Button title={"Get Started"} background={true} />
    </section>
  );
}
