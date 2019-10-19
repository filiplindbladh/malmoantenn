import React from "react";
import MixCard from "../MixCard/MixCard";
import "./MixList.css";

const MixList = ({ mixes }) => {
    return (
        <div className="Page-container">
            <ul className="MixList-list">
                {mixes &&
                    mixes.map(mix => (
                        <li className="MixList-listItem">
                            <MixCard
                                name={mix && mix.name}
                                url={mix && mix.url}
                                created={mix && mix.created_time.slice(0, 10)}
                                picture={mix && mix.pictures.large}
                                tags={mix && mix.tags}
                            />
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default MixList;
