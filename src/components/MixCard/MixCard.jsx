import React from "react";
import "./MixCard.css";

const MixCard = ({ url, picture, name, created, tags }) => {
    if (!picture) {
        return null;
    }

    return (
        <div data-mixcloud-play-button={url} className="MixCard">
            <img className="Card-img" src={picture} alt={name}></img>
            <div className="Card-info">
                <span className="Date">{created.replace(/-/g, ".")}</span>
                <h3 className="Heading">{name}</h3>
                {tags && (
                    <div className="Tags-container">
                        {tags.slice(0, 2).map(tag => (
                            <p className="Tag">{tag.name}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MixCard;
