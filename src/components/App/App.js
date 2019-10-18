import React, { Component } from "react";
import "./App.css";
import MixList from "../MixList/MixList";
import Header from "../Header/Header";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <MixList />
            </div>
        );
    }
}

export default App;
