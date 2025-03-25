"use client";

import styles from "./pagelayout.module.css";
import {
  MouseEvent,
  ReactNode,
  TouchEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import SideBar from "./components/Sidebar";
import PermutableText from "./components/PermutableText";
import { DRAG_RESIZE_EVENT_NAME } from "./draggableGrid";
import ResponsiveText from "./components/ResponsiveText";
import { usePathname } from "next/navigation";
import Image from "next/image";
import localFont from "next/font/local";

// TODO: Move this somewhere reasonable
export const headerFont = localFont({
  src: "../fonts/lansbury-fg.regular.ttf",
  variable: "--font-lansbury",
});

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

// TODO: Refactor so that these values are DRYer; right now, they appear in multiple places
const DRAG_BAR_WIDTH = 6;
const SIDEBAR_BREAKPOINT = 600;
const MIN_SIDEBAR_WIDTH = 50;
const MIN_MAINPAGE_WIDTH = 200;

export default function PageLayout({ children }: { children?: ReactNode }) {
  const [showSidebarOverlay, setShowSidebarOverlay] = useState(true);
  const [isDraggingSideBar, setIsDraggingSideBar] = useState(false);
  const pageWrapperRef = useRef<any>(null);
  const leftPanelRef = useRef<any>(null);

  useEffect(() => {
    // TODO: comment this function, and use classes rather than setting style directly
    window.onresize = () => {
      const pageWrapper = pageWrapperRef.current;
      if (pageWrapper) {
        if (pageWrapper.clientWidth >= SIDEBAR_BREAKPOINT) {
          pageWrapper.style.gridTemplateColumns = `22% ${DRAG_BAR_WIDTH}px 78%`;
        } else {
          pageWrapper.style.gridTemplateColumns = "0% 0px 100%";
        }
      }
      if (window.innerWidth > SIDEBAR_BREAKPOINT) {
        setShowSidebarOverlay(true);
      }
    };
    if (window.innerWidth <= SIDEBAR_BREAKPOINT) {
      setShowSidebarOverlay(false);
    }
  }, []);

  const getSidebarClass = () => {
    return showSidebarOverlay ? styles.left_panel : styles.invisible;
  };

  const handleMainContentClicked = () => {
    if (window.innerWidth <= 600) {
      setShowSidebarOverlay(false);
    }
  };

  const startDrag = useCallback(() => {
    setIsDraggingSideBar(true);
  }, [setIsDraggingSideBar]);

  const endDrag = useCallback(() => {
    setIsDraggingSideBar(false);
  }, [setIsDraggingSideBar]);

  const onDrag = (event: MouseEvent | TouchEvent) => {
    // Modification of the code here https://stackoverflow.com/a/57426239
    const pageWrapper = pageWrapperRef.current;
    const leftPanel = leftPanelRef.current;
    if (!isDraggingSideBar || !pageWrapper || !leftPanel) {
      return;
    }
    // We will calculate where the mouse/touch is located
    let columnWidth = 0;
    if (event.type === "mousemove") {
      event.preventDefault();
      columnWidth = (event as MouseEvent).clientX;
    } else if (event.type === "touchmove") {
      columnWidth = (event as TouchEvent).touches[0].clientX;
    }
    // Then, we will make sure the columnWidth is not too small or too big (crowding the main page entirely)
    columnWidth = Math.max(columnWidth, MIN_SIDEBAR_WIDTH);
    columnWidth = Math.min(
      columnWidth,
      pageWrapper.clientWidth - MIN_MAINPAGE_WIDTH
    );
    let rightWidth = pageWrapper.clientWidth - columnWidth;

    let cols = [
      columnWidth,
      DRAG_BAR_WIDTH,
      pageWrapper.clientWidth -
        2 * DRAG_BAR_WIDTH -
        columnWidth +
        DRAG_BAR_WIDTH,
      DRAG_BAR_WIDTH,
      rightWidth,
    ];

    let newColDefn = cols.map((c) => c.toString() + "px").join(" ");

    // TODO: use classes rather than setting style directly
    pageWrapper.style.gridTemplateColumns = newColDefn;
    window.dispatchEvent(new Event(DRAG_RESIZE_EVENT_NAME));
  };

  const location = usePathname();

  return (
    <main id="main" className={styles.main}>
      <div
        id="page-wrapper"
        ref={pageWrapperRef}
        className={styles.grid_container}
        onMouseMove={(e) => onDrag(e)}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchMove={(e) => onDrag(e)}
        onTouchEnd={endDrag}
        onTouchCancel={endDrag}
      >
        <div id="left-panel" ref={leftPanelRef} className={getSidebarClass()}>
          <SideBar
            selectedPath={location}
            handleClose={() => setShowSidebarOverlay(!showSidebarOverlay)}
          />
        </div>
        <div
          id="dragbar"
          className={styles.dragbar}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          <div className={styles.dragicon}></div>
        </div>
        <div
          id="right-panel-header"
          className={`${styles.right_panel_header} ${headerFont.className}`}
        >
          <Image
            className={styles.sidebar_icon}
            onClick={() => setShowSidebarOverlay(true)}
            src="/sidebar-icon.svg"
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
        <div
          onClick={() => handleMainContentClicked()}
          className={styles.right_panel_main}
        >
          {children}
        </div>
        <div className={styles.footer}>
          <a href="https://github.com/Mwindo" target="_blank">
            https://github.com/Mwindo
          </a>
        </div>
      </div>
    </main>
  );
}
