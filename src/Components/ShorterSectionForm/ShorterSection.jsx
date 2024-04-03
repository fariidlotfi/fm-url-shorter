import styles from "./ShorterSection.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useContext, useState } from "react";
import { shortURL } from "../../Hooks/shortUrlHook";
import { ShortedLinks } from "../../Contexts/ShortedLinks";

export default function ShorterSectionForm() {
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);
  const urlRegex = /^(?:https?|ftp):\/\/(?:\w+\.)+\w+(?:\/\S*)?$/;

  const { shortedLinksArr, setShortedLinksArr } = useContext(ShortedLinks);

  return (
    <>
      <div className={styles.box}>
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <Input
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
            type={"url"}
            placeholder={"Shorten a link here..."}
            error={error}
            customClass={styles.flex90}
          />
          <Button
            customClass={styles.flex10}
            onClick={async () => {
              if (link && urlRegex.test(link)) {
                const newItem = {
                  id: new Date().getTime(),
                  original: link,
                  short: await shortURL(link),
                };
                setError(false);
                setShortedLinksArr([...shortedLinksArr, newItem]);
                setLink("");
              } else {
                setError(true);
                alert("Enter a valid URL...");
              }
            }}
            title={"Short it"}
            background={true}
            borderRadius={6}
          />
        </form>
      </div>
    </>
  );
}
