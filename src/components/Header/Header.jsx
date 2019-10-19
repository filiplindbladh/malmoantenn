import React from "react";
import header from "../../img/header.jpg";
import "./Header.css";

const Menu = () => {
    return (
        <div className="Header">
            <img className="Header-img" src={header} alt="header" />
        </div>
    );
};

export default Menu;
