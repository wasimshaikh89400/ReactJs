import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import "./HeaderComponent.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

let img = require("../../Assests/Redesigned-Gmail.jpg");

const HeaderComponent = () => {
  return (
    <div className="body">
      <div className="header_left">
        <IconButton>
          <MenuIcon></MenuIcon>
        </IconButton>
        <img src={img.default} alt=""></img>
      </div>

      <div className="header_middle">
        <SearchIcon className="seachIcon" />
        <input type="text" placeholder="Search Mail"></input>
        <ArrowDropDownIcon></ArrowDropDownIcon>
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon></AppsIcon>
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};

export default HeaderComponent;
