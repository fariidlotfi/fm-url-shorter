import StaticsCard from "../StaticsCard/StaticsCard";
import styles from "./styles.module.css";

export default function AdvancedStaticsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.line}></div>
      <h2 className={styles.main_heading}>Advanced Statics</h2>
      <p className={styles.main_desc}>
        Track how your links are performing across the web with our advanced
        statistics dashboard. Brand Recognition
      </p>
      <section className={styles.boxes}>
        <StaticsCard
          icon={"icon-brand-recognition.svg"}
          title={"Brand Recognition"}
          desc={
            "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          }
        />
        <StaticsCard
          icon={"icon-detailed-records.svg"}
          title={"Detailed Records"}
          desc={
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          }
        />
        <StaticsCard
          icon={"icon-fully-customizable.svg"}
          title={"Fully Customizable"}
          desc={
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          }
        />
      </section>
    </section>
  );
}
