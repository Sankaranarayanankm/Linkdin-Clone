import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://img.freepik.com/free-photo/colorful-wallpaper-background-multicolored-generative-ai_91128-2257.jpg?t=st=1734409792~exp=1734413392~hmac=803dec83fe852e5bc30ef8fabcde0d849b263bf061f3cf8ebb001bbe95ec3f0e&w=900"
          alt="background"
          width="100%"
          height="60px"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Sankara Komana</h2>
        <h4>sanakraKomana@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewd you</p>
          <p className="sidebar__statNumber">2,345</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statNumber">2,745</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
