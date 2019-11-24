import React from "react";
import "./LivePlayer.css";

const LivePlayer = () => {
    return (
        <figure className="LivePlayer">
            <audio controls src="https://s2.radio.co/se9588efb3/listen">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </figure>
    );
};

export default LivePlayer;
