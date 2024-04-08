import { ReactNode } from "react";
import styles from "./BookItemList.module.css";

export default function BookItemList({ children }: { children: ReactNode }) {
  return <div className={styles.book_item_list}>{children}</div>;
}
