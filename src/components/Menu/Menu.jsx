import React from "react";
import "./Menu.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="Menu">
            <ul className="Menu-navList">
                <li className="Menu-navItem">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/archive">Archive</Link>
                </li>
            </ul>
            <Link to="/">
                <img className="Logo" src={logo} alt="logo" />
            </Link>
            <div>Socials</div>
        </nav>
    );
};

export default Menu;
