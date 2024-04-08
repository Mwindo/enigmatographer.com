import { MouseEventHandler, useState } from "react";
import { shuffleString } from "../scripts/wordAnimations";
import styles from "./PermutableText.module.css";

interface PermutableTextProps {
  text: string;
  options: string[];
  delay?: number;
}

const PermutableText = ({ text, options, delay = 60 }: PermutableTextProps) => {
  const [isPermuting, setIsPermuting] = useState<Boolean>(false);

  const handleClick: MouseEventHandler = (e) => {
    if (isPermuting) return; // Don't try to permute the text while already permuting or it could get garbled
    setIsPermuting(true);
    shuffleString(
      e.target as HTMLElement,
      options[Math.floor(Math.random() * options.length)],
      delay,
      () => setIsPermuting(false)
    );
  };

  return (
    <div className={styles.permutable_text_container} onClick={handleClick}>
      {text}
    </div>
  );
};

export default PermutableText;
