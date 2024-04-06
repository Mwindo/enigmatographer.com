"use client";

import styles from "./pagelayout.module.css";
import { ReactNode, useEffect, useState } from "react";
import SideBar from "./components/Sidebar";
import PermutableText from "./components/PermutableText";
import {
  EndDrag,
  OnDrag,
  StartLeftDrag,
  ResetColumnSizes,
} from "./draggableGrid.js";
import ResponsiveText from "./components/ResponsiveText";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function PageLayout({ children }: { children?: ReactNode }) {
  useEffect(() => {
    window.onresize = () => {
      ResetColumnSizes();
      if (window.innerWidth > 600) {
        setShowSidebarOverlay(true);
      }
    };
    if (window.innerWidth <= 600) {
      setShowSidebarOverlay(false);
    }
  }, []);

  const [showSidebarOverlay, setShowSidebarOverlay] = useState(true);

  const getSidebarClass = () => {
    return showSidebarOverlay ? styles.left_panel : styles.invisible;
  };

  const location = usePathname();

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
        <div id="left-panel" className={getSidebarClass()}>
          <SideBar
            selectedPath={location}
            handleClose={() => setShowSidebarOverlay(!showSidebarOverlay)}
          />
        </div>
        <div
          id="dragbar"
          className={styles.dragbar}
          onMouseDown={StartLeftDrag}
        >
          <div className={styles.dragicon}></div>
        </div>
        <div id="right-panel-header" className={styles.right_panel_header}>
          <Image
            className={styles.sidebar_icon}
            onClick={() => setShowSidebarOverlay(true)}
            src="sidebar-icon.svg"
            width={32}
            height={32}
            alt="Open sidebar"
          ></Image>
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
        <div className={styles.right_panel_main}>{children}</div>
        <div className={styles.footer}>
          <a href="https://github.com/Mwindo" target="_blank">
            https://github.com/Mwindo
          </a>
        </div>
      </div>
    </main>
  );
}
