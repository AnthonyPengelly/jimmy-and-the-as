import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Grid } from "react-bootstrap";
import AudioPlayer = require("react-responsive-audio-player");

import playlist from "./assets/audio";
import { Home } from "./components/home/home";
import { MeetTheBand } from "./components/meet_the_band/meet_the_band";
import { News } from "./components/news/news";
import { Contact } from "./components/contact/contact";
import { Navigation } from "./components/shared/navigation";
import { Header } from "./components/shared/header";
import { SongList } from "./components/song_list/song_list";
import { Gallery } from "./components/gallery/gallery";

ReactDOM.render((
    <BrowserRouter>
        <React.Fragment>
            <Header />
            <Navigation />
            <Grid role="main" className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/meet-the-band" component={MeetTheBand} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/song-list" component={SongList} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/contact" component={Contact} />
                    <Route render={() => <Redirect to="/" />} />
                </Switch>
            </Grid>
            <AudioPlayer playlist={playlist} gapLengthInSeconds={2} />
        </React.Fragment>
    </BrowserRouter>
), document.getElementById("react-app"));