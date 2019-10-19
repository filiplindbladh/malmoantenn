import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
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
