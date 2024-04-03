import styles from "./StaticsCard.module.css";

export default function StaticsCard({ icon, title, desc }) {
  return (
    <article className={styles.box}>
      <div className={styles.icon_holder}>
        <img className={styles.icon} src={icon} alt={title} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
    </article>
  );
}
