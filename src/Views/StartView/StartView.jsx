import React, { Component } from "react";
import Header from "../../components/Header/Header";
import MixList from "../../components/MixList/MixList";
import EventsList from "../../components/EventsList/EventsList";
import axios from "axios";
import { apiKey } from "../../apiKey";
import "./StartView.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYinYang } from "@fortawesome/free-solid-svg-icons";

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
                this.setState({ mixes: res.data.data, isLoading: false });
            })
            .catch(function(error) {
                console.log(error);
            });
        axios
            .get(`http://localhost:8888/mawp/wp-json/tribe/events/v1/events`)
            .then(res => {
                console.log(res);
                this.setState({ events: res.data.events });
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="StartView">
                {this.state.isLoading ? (
                    <div className="Spinner">
                        <FontAwesomeIcon size="5x" icon={faYinYang} />
                    </div>
                ) : (
                    <>
                        <Header />
                        <div className="Page-container">
                            <h2 className="Heading-large">Upcoming events</h2>
                            <EventsList events={this.state.events} />
                            <h2 className="Heading-large">Listen</h2>
                            <MixList
                                mixes={this.state.mixes.slice(0, 8)}
                                isStartPage
                            />
                            <div className="Pagination-buttonContainer">
                                <Link to="/archive">
                                    <button className="Button">See more</button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }
}
