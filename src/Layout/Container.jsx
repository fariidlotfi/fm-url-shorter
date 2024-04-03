import styles from "./Container.module.css";

export default function Container({ maxWidth, children }) {
  return (
    <div className={styles.container} style={{ maxWidth: maxWidth }}>
      {children}
    </div>
  );
}
