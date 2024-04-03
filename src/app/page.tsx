"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import SideBar from "./components/Sidebar"
import PermutableText from "./components/PermutableText";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.grid_container}>
          <div className={styles.left_panel}><SideBar /></div>
          <div className={styles.right_panel_header}>
            <PermutableText startText="Christopher" options={[""]}></PermutableText>
            <PermutableText startText="Bisom" options={[""]}></PermutableText>
          </div>
          <div className={styles.right_panel_main}></div>
          <div className={styles.footer}>2024</div>
      </div>
    </main>
  );
}
