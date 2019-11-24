import React from "react";
import "./Header.css";
import HeaderLogo from "../../img/Gradient_wave_filil.svg";

const Header = ({ description }) => {
    return (
        <div className="Header">
            <img className="Float" src={HeaderLogo} alt="headerlogo" />
            <div className="Page-container">
                <h1 className="Heading-large">Malmö Antenn</h1>
                <p className="Description">{description}</p>
                {/* <LivePlayer /> */}
            </div>
        </div>
    );
};

export default Header;
