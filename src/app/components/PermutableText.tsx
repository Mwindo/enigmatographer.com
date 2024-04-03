import { ReactNode, useState } from "react";
import { shuffleString } from "../scripts/wordAnimations";
import styles from "./PermutableText.module.css";

interface PermutableTextProps {
  text: string,
  options: string[];
  delay?: number;
}

const PermutableText = ({
  text,
  options,
  delay = 60,
}: PermutableTextProps) => {
  const id: string = self.crypto.randomUUID();

  const [isPermuting, setIsPermuting] = useState<Boolean>(false);

  const handleClick = () => {
    if (isPermuting) return;
    setIsPermuting(true);
    shuffleString(
      document.getElementById(id)!,
      options[Math.floor(Math.random() * options.length)],
      delay,
      () => setIsPermuting(false)
    );
  };

  return (
    <div
      id={id}
      className={styles.permutable_text_container}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default PermutableText;
