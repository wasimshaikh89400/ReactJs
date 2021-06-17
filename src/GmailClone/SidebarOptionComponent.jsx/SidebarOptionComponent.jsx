import React from "react";
import "./SidebarOptionComponent.css";

const SidebarOptionComponent = ({ Icon, message, title, selected }) => {
  return (
    <div className="sideBarDiv">
      <Icon />

      <h3>{title}</h3>
      <h3 className={`message ${selected && "navBarActive"}`}>{message}</h3>
    </div>
  );
};

export default SidebarOptionComponent;
