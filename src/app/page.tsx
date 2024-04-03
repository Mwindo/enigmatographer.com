"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import SideBar from "./components/Sidebar";
import PermutableText from "./components/PermutableText";
import {
  EndDrag,
  OnDrag,
  StartLeftDrag,
  ResetColumnSizes,
} from "./draggableGrid.js";
import ResponsiveText from "./components/ResponsiveText";

export default function Home() {
  useEffect(() => {
    window.onresize = ResetColumnSizes;
  }, []);

  const firstNamePermutations: string[] = [
    "First Name",
    "rehpotsirhC",
    "A work in progress",
    "Curioser",
    "Bibliophilic",
    "Darth Kris",
    "Relatively Turing Complete",
    "Homo Ludens",
  ];
  const lastNamePermutations: string[] = [
    "Last Name",
    "(Etymology unknown)",
    "mosiB",
    "Schmistopher",
    "Robin",
  ];

  return (
    <main id="main" className={styles.main}>
      <div
        id="page-wrapper"
        className={styles.grid_container}
        onMouseUp={EndDrag}
        onMouseMove={(e) => OnDrag(e)}
      >
        <div id="left-panel" className={styles.left_panel}>
          <SideBar />
        </div>
        <div
          id="dragbar"
          className={styles.dragbar}
          onMouseDown={StartLeftDrag}
        >
          <div className={styles.dragicon}></div>
        </div>
        <div id="right-panel-header" className={styles.right_panel_header}>
          <ResponsiveText
            textOptions={[
              { text: "Chris", breakpoint: 600 },
              { text: "Christopher", breakpoint: 1000 },
            ]}
            permutationOptions={{ options: firstNamePermutations, delay: 180 }}
          />
          <PermutableText
            text="Bisom"
            delay={180}
            options={lastNamePermutations}
          />
        </div>
        <div className={styles.right_panel_main}></div>
        <div className={styles.footer}>2024</div>
      </div>
    </main>
  );
}
