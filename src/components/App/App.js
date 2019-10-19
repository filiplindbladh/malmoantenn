import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import MixList from "../MixList/MixList";
import Menu from "../Menu/Menu";
import StartView from "../../Views/StartView";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/">
                        <StartView />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
