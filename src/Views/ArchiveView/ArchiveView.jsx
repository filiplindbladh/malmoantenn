import React, { Component } from "react";
import MixList from "../../components/MixList/MixList";
import Menu from "../../components/Menu/Menu";
import axios from "axios";
import { apiKey } from "../../apiKey";

export default class ArchiveView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mixes: [],
            next: "",
            prev: "",
        };
    }

    componentWillMount() {
        axios
            .get(
                `https://api.mixcloud.com/malmoantenn/cloudcasts/?code=${apiKey}`
            )
            .then(res => {
                this.setState({ mixes: res.data.data });
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
                <MixList mixes={this.state.mixes} />
                <div className="Pagination-buttonContainer">
                    <button onClick={e => this.paginate()}>Show more</button>
                </div>
            </div>
        );
    }
}
