import * as React from "react";

export class Sidebar extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <a className="twitter-timeline" href="https://twitter.com/jimmyandtheas?ref_src=twsrc%5Etfw">
                    Tweets by @JimmyAndTheAs
                </a>
            </div>
        );
    }
}