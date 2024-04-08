import { ReactNode } from "react";
import styles from "./ArticleSection.module.css";

interface ArticleSectionProps {
  title: string;
  children: ReactNode;
}

export default function ArticleSection({
  title,
  children,
}: ArticleSectionProps) {
  return (
    <section>
      <h3>{title}</h3>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
