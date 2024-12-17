import React from "react";
import "./HeaderOptions.css";
import { Avatar } from "@mui/material";

const HeaderOptions = ({ avatar, title, Icon }) => {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar src={avatar} className="headerOption__icon" />}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
