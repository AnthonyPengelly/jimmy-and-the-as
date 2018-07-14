import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Homepage } from "./components/homepage";
import { Hello } from "./components/hello";

ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/hello" component={Hello} />
        </Switch>
    </HashRouter>
), document.getElementById("react-app"));