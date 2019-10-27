import React from "react";
import MixCard from "../MixCard/MixCard";
import "./MixList.css";
import Masonry from "react-masonry-css";
import { useMediaQuery } from "react-responsive";

const MixList = ({ mixes, isStartPage, search }) => {
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 440px)" });
    const columns = () => {
        if (isMobile) {
            return 1;
        } else if (isTablet) {
            return 2;
        } else return isStartPage ? 4 : 3;
    };
    return (
        <div>
            <Masonry
                breakpointCols={columns()}
                className="my-masonry-grid"
                columnClassName="MixList-listItem"
            >
                {mixes &&
                    mixes
                        .filter(mix => {
                            return (
                                mix.name
                                    .toLowerCase()
                                    .indexOf(search.toLowerCase()) !== -1
                            );
                        })
                        .map(mix => (
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
        </div>
    );
};

export default MixList;
