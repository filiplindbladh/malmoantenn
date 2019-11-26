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
                <li className="Menu-navItem">
                    <Link to="/archive">Archive</Link>
                </li>
            </ul>
            <Link to="/" aria-label="Go to Start Page">
                <img className="Logo" src={logo} alt="logo" />
            </Link>
            <div className="Menu-socials">
                <a
                    href="https://www.instagram.com/malmoantenn/"
                    aria-label="Go to Malmö Antenn on Instagram"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="https://www.facebook.com/mlmantenn/"
                    aria-label="Go to Malmö Antenn on Facebook"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://www.mixcloud.com/malmoantenn/"
                    aria-label="Go to Malmö Antenn on Mixcloud"
                >
                    <FontAwesomeIcon icon={faMixcloud} />
                </a>
            </div>
        </nav>
    );
};

export default Menu;
