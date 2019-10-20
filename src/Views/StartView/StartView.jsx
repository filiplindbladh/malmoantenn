import React, { Component } from "react";
import Header from "../../components/Header/Header";
import MixList from "../../components/MixList/MixList";
import axios from "axios";
import { apiKey } from "../../apiKey";
import "./StartView.css";
import { Link } from "react-router-dom";

export default class StartView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mixes: [],
        };
    }

    componentWillMount() {
        axios
            .get(
                `https://api.mixcloud.com/malmoantenn/cloudcasts/?code=${apiKey}`
            )
            .then(res => {
                this.setState({ mixes: res.data.data });
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="StartView">
                <Header />
                <div className="Page-container">
                    <MixList mixes={this.state.mixes.slice(0, 8)} />
                    <div className="Pagination-buttonContainer">
                        <Link to="/archive">
                            <button>See more</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
