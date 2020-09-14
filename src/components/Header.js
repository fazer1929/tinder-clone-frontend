import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";
import Cards from "./Cards";

function Header() {
  return (
    <>
      <div className="header">
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
        <img
          className="header__logo"
          alt="logo"
          src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
        />
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </div>
    </>
  );
}

export default Header;
