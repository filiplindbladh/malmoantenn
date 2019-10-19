import React from "react";
import "./MixCard.css";

const MixCard = ({ url, picture, name, created }) => {
    if (!picture) {
        return null;
    }

    return (
        <div data-mixcloud-play-button={url} className="MixCard">
            <img src={picture} alt={name}></img>
            <div className="Card-info">
                <span>{created.replace(/-/g, ".")}</span>
                <h3 className="Heading">{name}</h3>
            </div>
        </div>
    );
};

export default MixCard;
