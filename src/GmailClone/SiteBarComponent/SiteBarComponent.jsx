import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./siteBarComponent.css";
import SidebarOptionComponent from "../SidebarOptionComponent.jsx/SidebarOptionComponent";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SiteBarComponent = () => {
  return (
    <div className="sidebar" style={{ marginTop: "50px" }}>
      <button className="sideButton">
        {" "}
        <AddIcon />
        Compose
      </button>
      <SidebarOptionComponent
        Icon={InboxIcon}
        message={54}
        title="inbox"
        selected={true}
      ></SidebarOptionComponent>
      <SidebarOptionComponent
        Icon={StarIcon}
        message={54}
        title="Starred"
        selected={false}
      ></SidebarOptionComponent>
      <SidebarOptionComponent
        Icon={AccessTimeIcon}
        message={54}
        title="Snoozed"
        selected={false}
      ></SidebarOptionComponent>
      <SidebarOptionComponent
        Icon={LabelImportantIcon}
        message={54}
        title="Important"
        selected={false}
      ></SidebarOptionComponent>
      <SidebarOptionComponent
        Icon={NearMeIcon}
        message={54}
        title="Sent"
        selected={false}
      ></SidebarOptionComponent>
      <SidebarOptionComponent
        Icon={NoteIcon}
        message={54}
        title="Draft"
        selected={false}
      ></SidebarOptionComponent>{" "}
      <SidebarOptionComponent
        Icon={ExpandMoreIcon}
        message={54}
        title="More"
        selected={false}
      ></SidebarOptionComponent>
    </div>
  );
};

export default SiteBarComponent;
