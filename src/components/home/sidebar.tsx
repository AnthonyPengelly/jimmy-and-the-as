import * as React from "react";
import { Timeline } from "react-twitter-widgets";

export class Sidebar extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Timeline dataSource={{sourceType: "profile", screenName: "jimmyandtheas"}} />
            </div>
        );
    }
}