import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="MenuBar">
        <MenuIcon />
      </div>
      <div className="sidebaer_button">
        <HomeIcon />
        Homes
      </div>
      <div className="sidebaer_button">
        <OndemandVideoIcon />
        Shorts
      </div>
      <div className="sidebaer_button">
        <PlayCircleIcon />
        Subscription
      </div>
      <div className="sidebaer_button">You like</div>
    </div>
  );
};
