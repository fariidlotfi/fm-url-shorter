import styles from "./Input.module.css";

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  error,
  customClass,
}) {
  return (
    <input
      className={`${styles.input} ${
        error ? styles.errorStyle : null
      } ${customClass}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
