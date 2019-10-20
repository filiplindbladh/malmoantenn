import React from "react";
import "./Menu.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faMixcloud,
} from "@fortawesome/free-brands-svg-icons";

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
            <div className="Menu-socials">
                <FontAwesomeIcon size="2x" icon={faInstagram} />
                <FontAwesomeIcon size="2x" icon={faFacebook} />
                <FontAwesomeIcon size="2x" icon={faMixcloud} />
            </div>
        </nav>
    );
};

export default Menu;
