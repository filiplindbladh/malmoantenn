import React, { Component } from "react";
import axios from "axios";
import { apiKey } from "../../apiKey";
import MixCard from "../MixCard/MixCard";
import "./MixList.css";

export default class MixList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mixes: [],
        };
    }

    componentWillMount() {
        axios
            .get(`https://api.mixcloud.com/malmoantenn/feed/?code=${apiKey}`)
            .then(res => {
                const format = Object.entries(res.data.data)
                    .map(item => {
                        return item[1].cloudcasts;
                    })
                    .flat()
                    .filter(i => i);
                this.setState({ mixes: [...format] });
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    render() {
        console.log("state", this.state.mixes);

        return (
            <div className="Page-container">
                <ul className="MixList-list">
                    {this.state.mixes &&
                        this.state.mixes.map(item => (
                            <li className="MixList-listItem">
                                <MixCard
                                    name={item && item.name}
                                    url={item && item.url}
                                    created={
                                        item && item.created_time.slice(0, 10)
                                    }
                                    picture={item && item.pictures.large}
                                />
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}
