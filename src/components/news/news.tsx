import * as React from "react";
import { Link } from "react-router-dom"

export class News extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>News</h1>
                <h2>Coming soon!</h2>
                    <img className="full-size-image" src="/images/mention-me2.jpg" alt="Jimmy &amp; the As" />
            </div>
        );
    }
}