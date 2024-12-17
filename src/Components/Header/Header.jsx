import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "../HeaderOptions/HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { Chat, Notifications } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://icons.iconarchive.com/icons/martz90/circle/256/linkedin-icon.png"
          alt="header-icon"
          width={50}
          height={50}
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search...." />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions title="home" Icon={HomeIcon} />
        <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOptions title="Messages" Icon={Chat} />
        <HeaderOptions title="Notifications" Icon={Notifications} />
        <HeaderOptions
          avatar="https://i.etsystatic.com/40979871/r/il/396691/4716087987/il_794xN.4716087987_necf.jpg"
          title="me"
        />
      </div>
    </div>
  );
};

export default Header;
