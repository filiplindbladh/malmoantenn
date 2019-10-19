import React, { Component } from "react";
import Header from "../components/Header/Header";
import MixList from "../components/MixList/MixList";
import Menu from "../components/Menu/Menu";
import axios from "axios";
import { apiKey } from "../apiKey";

export default class StartView extends Component {
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
        return (
            <div className="StartView">
                <Menu />
                <Header />
                <MixList mixes={this.state.mixes} />
            </div>
        );
    }
}
