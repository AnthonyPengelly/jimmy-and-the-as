import * as React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Sidebar } from "./sidebar";

export class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div className="news">
                <Row>
                    <Col xs={12} md={8}>
                        <h2>Jimmy &amp; the As</h2>
                        <p>
                            We're a great band who can provide an electric or acoustic set for your event.
                            <Link to="/contact">Contact us for more details.</Link>
                        </p>
                        <img className="full-size-image" src="/images/mention-me1.jpg" alt="Jimmy &amp; the As" />
                    </Col>
                    <Col xs={12} md={4}>
                        <Sidebar />
                    </Col>
                </Row>
            </div>
        );
    }
}