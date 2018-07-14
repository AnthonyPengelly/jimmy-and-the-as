import * as React from "react";
import { Button } from "react-bootstrap";

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div>
                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <Button bsStyle="primary">Primary Button</Button>
            </div>
            
        );
    }
}