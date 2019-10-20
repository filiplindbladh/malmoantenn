import React, { Component } from "react";
import MixList from "../../components/MixList/MixList";
import axios from "axios";
import { apiKey } from "../../apiKey";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYinYang } from "@fortawesome/free-solid-svg-icons";

export default class ArchiveView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mixes: [],
            next: "",
            prev: "",
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
                this.setState({ next: res.data.paging.next });
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    paginate() {
        axios
            .get(this.state.next)
            .then(res => {
                const joined = this.state.mixes.concat(res.data.data);
                this.setState({ mixes: joined });
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div className="Page-container">
                <h1>Archive</h1>
                {this.state.isLoading ? (
                    <div className="Spinner">
                        <FontAwesomeIcon size="5x" icon={faYinYang} />
                    </div>
                ) : (
                    <>
                        <MixList mixes={this.state.mixes} />
                        <div className="Pagination-buttonContainer">
                            <button onClick={e => this.paginate()}>
                                Show more
                            </button>
                        </div>
                    </>
                )}
            </div>
        );
    }
}
