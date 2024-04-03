import { useContext } from "react";
import ShortedResult from "../ShortedResult/ShortedResult";
import styles from "./styles.module.css";
import { ShortedLinks } from "../../Contexts/ShortedLinks";

export default function ShortedLinksList() {
  const { shortedLinksArr } = useContext(ShortedLinks);

  return (
    <section className={styles.container}>
      <div className={styles.list}>
        {shortedLinksArr &&
          shortedLinksArr.map((i) => (
            <ShortedResult key={i.id} origin={i.original} shorted={i.short} />
          ))}
      </div>
    </section>
  );
}
