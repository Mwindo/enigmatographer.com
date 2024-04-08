import { ReactNode } from "react";
import styles from "./BookItem.module.css";
import pageStyles from "./PageWrapper.module.css";
import Image from "next/image";
import Link from "next/link";

interface BookItemProps {
  title: string;
  authors: string[];
  url: string;
  image: string;
  children: ReactNode;
}

export default function BookItem({
  title,
  authors,
  url,
  image,
  children,
}: BookItemProps) {
  return (
    <section className={styles.item_wrapper}>
      <div className={styles.container}>
        <div className={styles.left_panel_wrapper}>
          <Link href={url} target="_blank">
            <Image
              className={styles.image}
              src={image}
              width={200}
              height={300}
              alt={`${title} image`}
            ></Image>
          </Link>
        </div>
        <div className={styles.right_panel}>
          <Link className={pageStyles.link} href={url} target="_blank">
            <h2>{title}</h2>
          </Link>
          <h4>{authors.join(", ")}</h4>
          {children}
        </div>
      </div>
    </section>
  );
}
