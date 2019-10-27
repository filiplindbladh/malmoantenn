import React from "react";
import MixCard from "../MixCard/MixCard";
import "./MixList.css";
import Masonry from "react-masonry-css";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const MixList = ({ mixes, isStartPage, search = "" }) => {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 440px)" });
    const columns = () => {
        if (isMobile) {
            return 1;
        } else if (isTablet) {
            return 2;
        } else return isStartPage ? 4 : 3;
    };

    const filter = mixes => {
        const filtered = mixes.filter(item => {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        if (isStartPage) {
            return mixes;
        } else {
            return filtered;
        }
    };
    return (
        <div>
            {filter(mixes).length === 0 ? (
                <div className="MixList-Error">
                    <FontAwesomeIcon size="2x" icon={faExclamationTriangle} />
                    <p>No mixes found! Try something else</p>
                </div>
            ) : (
                <Masonry
                    breakpointCols={columns()}
                    className="my-masonry-grid"
                    columnClassName="MixList-listItem"
                >
                    {mixes &&
                        filter(mixes).map(mix => (
                            <MixCard
                                name={mix && mix.name}
                                url={mix && mix.url}
                                created={mix && mix.created_time.slice(0, 10)}
                                picture={mix && mix.pictures.large}
                                tags={mix && mix.tags}
                                key={mix && mix.created_time}
                            />
                        ))}
                </Masonry>
            )}
        </div>
    );
};

export default MixList;
