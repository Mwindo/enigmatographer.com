import { ReactNode } from "react";
import { shuffleString } from "../scripts/wordAnimations";
import styles from './PermutableText.module.css';

interface PermutableTextProps {
  startText: string;
  options: string[];
}

const PermutableText = ({
  startText,
  options,
}: PermutableTextProps) => (
  <div
    id={`permute_${startText}`}
    className={styles.permutable_text_container}
    onClick={() => shuffleString(document.getElementById(`permute_${startText}`)!, "test")}
  >
    {startText}
  </div>
);

export default PermutableText;
