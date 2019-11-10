import React from "react";
import "./MixCard.css";

const MixCard = ({ url, picture, name, created, tags }) => {
    if (!picture) {
        return null;
    }

    return (
        <div data-mixcloud-play-button={url} className="MixCard">
            <div className="MixCard-wrapper">
                <div className="Card-imgWrapper">
                    <img className="Card-img" src={picture} alt={name}></img>
                </div>
                <div className="Card-info">
                    <span className="Date">{created.replace(/-/g, ".")}</span>
                    <h3 className="Heading-small">{name}</h3>
                    {tags && (
                        <div className="Tags-container">
                            {tags.slice(0, 2).map(tag => (
                                <span key={tag.name} className="Tag">
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MixCard;
