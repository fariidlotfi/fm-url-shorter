import styles from "./ShortedResult.module.css";
import Button from "../Button/Button";

export default function ShortedResult({ origin, shorted }) {
  return (
    <article className={styles.box}>
      <p className={styles.originText}>{origin}</p>
      <div className={styles.export}>
        <p className={styles.shortedText}>{shorted}</p>
        <Button
          title={"Copy!"}
          background={true}
          borderRadius={6}
          onClick={() => {
            navigator.clipboard.writeText(shorted);
            alert("Shorted Link Copied to Clipboard!");
          }}
        />
      </div>
    </article>
  );
}
