import styles from "./PageWrapper.module.css";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

export interface PageWrapperProps {
  header: string;
  headerLinkURL?: string;
  headerIcon?: string;
  headerIconSize?: number;
  headerIconAlt?: string;
  headerIconCitation?: string;
  children: ReactNode;
  backgroundColor?: string;
}

export default function PageWrapper({
  header,
  headerLinkURL,
  headerIcon,
  headerIconSize = 64,
  headerIconAlt,
  headerIconCitation,
  children,
  backgroundColor = "rgb(40, 43, 48)",
}: PageWrapperProps) {
  return (
    <div className={styles.page} style={{ backgroundColor: backgroundColor }}>
      <div className={styles.close_container}>
        <Link className={styles.close_button} href="/">
          ✖
        </Link>
      </div>
      <div className={styles.header}>
        {headerIcon && (
          <Image
            alt={`${headerIconAlt}`}
            className={styles.icon}
            height={headerIconSize}
            src={headerIcon}
            title={headerIconCitation}
            width={headerIconSize}
          ></Image>
        )}
        {headerLinkURL ? (
          <Link className={styles.link} href={headerLinkURL} target="_blank">
            <h1 className={styles.h1}>{header}</h1>
          </Link>
        ) : (
          <h1 className={styles.h1}>{header}</h1>
        )}
      </div>
      <section>{children}</section>
    </div>
  );
}
