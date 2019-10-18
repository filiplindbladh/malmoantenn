import React from "react";
import "./MixCard.css";

const MixCard = ({ url, picture, name, created }) => {
    return (
        <div className="MixCard">
            <a data-mixcloud-play-button={url}>
                <img src={picture} alt={name}></img>
                <h2>{name}</h2>
                <p>{created}</p>
            </a>
        </div>
    );
};

export default MixCard;
