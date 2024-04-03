import styles from "./Hero.module.css";
import Container from "../../Layout/Container";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <>
      <Container maxWidth={1200}>
        <section className={styles.hero}>
          <div className={styles.hero__texts}>
            <h1 className={styles.hero__heading}>More than just shorter links</h1>
            <p className={styles.hero__paragraph}>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button background={true} title={"Get Started"}  />
          </div>
          <div className={styles.hero__image}>
            <img
              src="illustration-working.svg"
              alt="hero image"
              className={styles.hero__image_img}
            />
          </div>
        </section>
      </Container>
    </>
  );
}
