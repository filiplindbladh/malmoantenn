import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";
const Header = () => {
    return (
        <div className="Header">
        	<div>Home</div>
        	<img className="logo" src={logo} alt="logo"/>
        	<div>Socials</div>
        </div>
    );
};

export default Header;
