import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import StartView from "../../Views/StartView/StartView";
import ArchiveView from "../../Views/ArchiveView/ArchiveView";
import Menu from "../../components/Menu/Menu";

export default function App() {
    return (
        <Router>
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/">
                        <StartView />
                    </Route>
                    <Route path="/archive">
                        <ArchiveView />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
