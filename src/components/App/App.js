import React, { Component } from "react";
import "./App.css";
import MixList from "../MixList/MixList";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu />
                <Header />
                <MixList />
            </div>
        );
    }
}

export default App;
