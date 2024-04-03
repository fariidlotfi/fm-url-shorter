import styles from "./Button.module.css";

export default function Button({
  title,
  borderRadius,
  background,
  onClick,
  customClass,
  color
}) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${
        background ? styles.background : ""
      } ${customClass}`}
      style={{ borderRadius: borderRadius, color: color }}
    >
      {title}
    </button>
  );
}
