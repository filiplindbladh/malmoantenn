import React, { Component } from "react";
import Header from "../../components/Header/Header";
import MixList from "../../components/MixList/MixList";
import EventsList from "../../components/EventsList/EventsList";
import axios from "axios";
import { apiKey } from "../../apiKey";
import "./StartView.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

export default class StartView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mixes: [],
            events: [],
            isLoading: true,
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
        axios
            .get(`http://localhost:8888/mawp/wp-json/tribe/events/v1/events`)
            .then(res => {
                this.setState({ events: res.data.events, isLoading: false });
            })
            .catch(function(error) {
                console.log(error);
            });
        axios
            .get(`https://s2.radio.co/se9588efb3/listen`)
            .then(res => {
                console.log(res);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    render() {
        if (this.state.isLoading) {
            return <Loader />;
        }
        return (
            <div className="StartView">
                <Header events={this.state.events} />
                <div className="Page-container">
                    <EventsList events={this.state.events} />
                    <h2 className="Heading-medium">Archive</h2>
                    <MixList mixes={this.state.mixes.slice(0, 8)} isStartPage />
                    <div className="Pagination-buttonContainer">
                        <Link to="/archive">
                            <button className="Button">See more</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
