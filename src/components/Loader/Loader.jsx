import React from "react";
import "./Loader.css";
import logo from "../../img/logo.png";

const Loader = () => {
    return (
        <div className="Loader">
            <img className="Loader-img-logo rotate" src={logo} />
        </div>
    );
};

export default Loader;
