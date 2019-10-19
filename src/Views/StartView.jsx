import React, { Component } from "react";
import Header from "../components/Header/Header";
import MixList from "../components/MixList/MixList";
import Menu from "../components/Menu/Menu";

export default class StartView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="StartView">
                <Menu />
                <Header />
                <MixList />
            </div>
        );
    }
}
