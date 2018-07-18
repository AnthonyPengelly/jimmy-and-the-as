import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Grid } from "react-bootstrap";

import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { News } from "./components/news/news";
import { Contact } from "./components/contact/contact";
import { Navigation } from "./components/shared/navigation";
import { Header } from "./components/shared/header";

ReactDOM.render((
    <BrowserRouter>
        <React.Fragment>
            <Header />
            <Navigation />
            <Grid role="main" className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/contact" component={Contact} />
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </Grid>
        </React.Fragment>
    </BrowserRouter>
), document.getElementById("react-app"));