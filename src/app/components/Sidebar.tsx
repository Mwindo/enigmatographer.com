import React from "react";
import TreeView, { flattenTree } from "react-accessible-treeview";
import './sidebar.css';

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
          name: "software",
          children: [{ name: "this site"},  {name: "commonplace" }, {name: "word train"}],
        },
        { name: "music", children: [{name: "waltz in d minor"}, {name: "bagatelle for ana"}] },
      ],
    },
    {
      name: "currently reading",
    },
  ],
};

const data = flattenTree(folder);

const SideBar = () => (
  <TreeView
    data={data}
    className="basic"
    aria-label="basic example tree"
    nodeRenderer={({ element, getNodeProps, level, handleSelect }) => (
      <div {...getNodeProps()} style={{ paddingLeft: 20 * (level - 1) }}>
        {element.name}
      </div>
    )}
  />
);

export default SideBar;