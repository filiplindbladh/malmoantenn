import React, { Component } from "react";
import "./App.css";
import MixList from "../MixList/MixList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header" />
                <MixList />
            </div>
        );
    }
}

export default App;
