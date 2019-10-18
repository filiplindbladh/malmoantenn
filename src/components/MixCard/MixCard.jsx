import React from "react";
import "./MixCard.css";

const MixCard = ({ url, picture, name, created }) => {
    return (
        <div data-mixcloud-play-button={url} className="MixCard">
            <img src={picture} alt={name}></img>
            <h2>{name}</h2>
            <p>{created}</p>
        </div>
    );
};

export default MixCard;
