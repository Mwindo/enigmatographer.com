import React from "react";
import TreeView, { ITreeViewOnNodeSelectProps, flattenTree } from "react-accessible-treeview";
import "./sidebar.css";
import { useRouter } from "next/navigation";

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
            { name: "projects/software/this-site"},
            { name: "projects/software/commonplace"},
            { name: "projects/software/word-train"},
          ],
        },
        {
          name: "projects/music",
          children: [
            { name: "projects/music/waltz-in-d-minor"},
            { name: "projects/music/bagatelle-for-ana"},
            { name: "projects/music/untitled-in-a-minor"},
            { name: "projects/music/untitled-in-g-minor"},
            { name: "projects/music/untitled-in-e-minor"},
            { name: "projects/music/untitled-in-f-minor"},
          ],
        },
      ],
    },
    {
      name: "currently-reading",
    },
  ],
};

const data = flattenTree(folder);

const SideBar = () => {
  const router = useRouter();

  const getRouteForNode = (nodeName: string) => {
    if (nodeName === "bio") {
      return "/";
    }
    return "/" + nodeName;
  }

  return (
    <TreeView
      data={data}
      className="basic"
      aria-label="basic example tree"
      onNodeSelect={(e) => router.push(getRouteForNode(e.element.name))}
      nodeRenderer={({ element, getNodeProps, level, handleSelect }) => (
        <div {...getNodeProps()} style={{ paddingLeft: 10 * (level - 1) }}>
          {element.name.split("/").slice(-1)[0]}
        </div>
      )}
    />
  );
};

export default SideBar;
