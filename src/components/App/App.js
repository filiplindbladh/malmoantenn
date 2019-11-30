import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import StartView from "../../Views/StartView/StartView";
import ArchiveView from "../../Views/ArchiveView/ArchiveView";
import Menu from "../../components/Menu/Menu";

import { createBrowserHistory } from "history";

export default function App() {
    const history = createBrowserHistory();
    const dataLayer = (window.dataLayer = window.dataLayer || []);
    history.listen(() => {
        dataLayer.push({
            event: "virtual_pageview",
            pageData: {
                location: window.location,
                path: window.location.pathname,
                title: window.location.title,
                hostname: window.location.hostname,
            },
        });
    });
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
