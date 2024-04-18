import { MouseEventHandler, useEffect, useState } from "react";
import { shuffleString } from "../scripts/wordAnimations";
import styles from "./PermutableText.module.css";

interface PermutableTextProps {
  text: string;
  options: string[];
  delay?: number;
}

// Fisher-Yates
export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const PermutableText = ({ text, options, delay = 60 }: PermutableTextProps) => {
  const [isPermuting, setIsPermuting] = useState<Boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(
    // On rerender, we shuffle the options
    () => {
      options = shuffle(options);
    },
    []
  );

  const handleClick: MouseEventHandler = (e) => {
    if (isPermuting) return; // Don't try to permute the text while already permuting or it could get garbled
    setIsPermuting(true);
    // Iterate through the options
    setCurrentIndex((currentIndex + 1) % options.length);
    shuffleString(e.target as HTMLElement, options[currentIndex], delay, () =>
      setIsPermuting(false)
    );
  };

  return (
    <div className={styles.permutable_text_container} onClick={handleClick}>
      {text}
    </div>
  );
};

export default PermutableText;
