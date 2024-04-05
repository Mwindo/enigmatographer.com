import styles from "./PageWrapper.module.css";
import { ReactNode } from "react";
import Link from "next/link";

export interface PageWrapperProps {
  header: string;
  headerLinkURL?: string;
  children: ReactNode;
  backgroundColor?: string;
}

export default function PageWrapper({
  header,
  headerLinkURL,
  children,
  backgroundColor = "rgb(40, 43, 48)",
}: PageWrapperProps) {
  return (
    <div className={styles.page} style={{ backgroundColor: backgroundColor }}>
      <Link className={styles.close} href="/">✖</Link>
      {headerLinkURL ? (
        <Link href={headerLinkURL} target="_blank">
          <h1 className={styles.h1}>{header}</h1>
        </Link>
      ) : (
        <h1 className={styles.h1}>{header}</h1>
      )}
      <section>{children}</section>
    </div>
  );
}
