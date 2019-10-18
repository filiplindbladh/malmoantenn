import React, { Component } from "react";
import "./App.css";
import MixList from "../MixList/MixList";
import Menu from "../Menu/Menu";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu />
                <MixList />
            </div>
        );
    }
}

export default App;
