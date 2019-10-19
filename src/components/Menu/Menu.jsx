import React from "react";
import "./Menu.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="Menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <Link to="/">
                <img className="logo" src={logo} alt="logo" />
            </Link>
            <div>Socials</div>
        </nav>
    );
};

export default Menu;
