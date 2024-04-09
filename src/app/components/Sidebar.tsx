import React from "react";
import TreeView, {
  ITreeViewOnNodeSelectProps,
  NodeId,
  flattenTree,
} from "react-accessible-treeview";
import "./sidebar.css";
import { useRouter } from "next/navigation";
import styles from "./Sidebar.module.css";

const folder = {
  name: "",
  children: [
    {
      name: "bio",
    },
    {
      name: "projects",
      children: [
        {
          name: "projects/software",
          children: [
            { name: "projects/software/this-site" },
            { name: "projects/software/commonplace" },
            { name: "projects/software/word-train" },
          ],
        },
        {
          name: "projects/music",
          children: [
            { name: "projects/music/waltz-in-d-minor" },
            { name: "projects/music/bagatelle-for-ana" },
            { name: "projects/music/untitled-in-a-minor" },
            { name: "projects/music/untitled-in-g-minor" },
            { name: "projects/music/untitled-in-e-minor" },
          ],
        },
        {
          name: "projects/lists",
        },
      ],
    },
    {
      name: "currently-reading",
    },
    {
      name: "contact",
    },
  ],
};

const data = flattenTree(folder);

const getRouteForNode = (nodeName: string) => {
  return "/" + nodeName;
};

const getIDFromPath = (path: string): NodeId | undefined => {
  return data.find((e) => "/" + e.name == path)?.id;
};

const getParentPath = (path: string): NodeId[] | undefined => {
  return data.filter((e) => path.includes(e.name)).map((e) => e.id);
};

const SideBar = ({
  selectedPath,
  handleClose,
}: {
  selectedPath?: string;
  handleClose: () => void;
}) => {
  const router = useRouter();
  const selectedId = getIDFromPath(selectedPath || "");

  return (
    <div>
      <div className={styles.close_container}>
        <button className={styles.close_button} onClick={handleClose}>
          ✖
        </button>
      </div>
      <TreeView
        data={data}
        className="basic"
        aria-label="basic example tree"
        selectedIds={[selectedId] as NodeId[]}
        expandedIds={selectedId ? getParentPath(selectedPath || "") : []}
        onNodeSelect={(e) => router.push(getRouteForNode(e.element.name))}
        nodeRenderer={({ element, getNodeProps, level, handleSelect }) => (
          <div {...getNodeProps()} style={{ paddingLeft: 10 * (level - 1) }}>
            {element.name.split("/").slice(-1)[0]}
          </div>
        )}
      />
    </div>
  );
};

export default SideBar;
