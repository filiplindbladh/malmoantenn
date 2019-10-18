import React from "react";
import "./Menu.css";
import logo from "../../img/logo.png";

const Menu = () => {
    return (
        <div className="Menu">
            <div>Home</div>
            <img className="logo" src={logo} alt="logo" />
            <div>Socials</div>
        </div>
    );
};

export default Menu;
