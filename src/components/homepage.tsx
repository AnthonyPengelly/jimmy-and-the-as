import * as React from "react";
import { Link } from "react-router-dom"

export class Homepage extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>Jimmy and the As</h1>
                <Link to="/hello">Hello</Link>
            </div>
        );
    }
}