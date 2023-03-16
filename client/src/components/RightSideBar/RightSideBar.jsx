import React from "react";
import Widgets from "./Widgets";
import WidgetTags from "./WidgetTags";
import "./RightSideBar.css";
const RightSideBar = () => {
  return (
    <aside className="right-sidebar">
      <Widgets />
      <WidgetTags />
    </aside>
  );
};

export default RightSideBar;
