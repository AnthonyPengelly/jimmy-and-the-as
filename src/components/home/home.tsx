import * as React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Sidebar } from "./sidebar";

export class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div className="news">
                <Row>
                    <Col xs={12} sm={8}>
                        <h2>Jimmy &amp; the As</h2>
                        <p>
                            We're a lively function band based in and around London. We provide upbeat acoustic covers to get everyone up and dancing.
                            Focussing on punchy horn lines and layered harmonies, we're sure to inject a bit of energy into your event.
                            Have a listen to some of our recordings at the bottom of the page or <Link to="/contact">contact us for more details.</Link>
                        </p>
                        <img className="full-size-image" src="/images/mention-me1.jpg" alt="Jimmy &amp; the As" />
                    </Col>
                    <Col xs={12} sm={4}>
                        <Sidebar />
                    </Col>
                </Row>
            </div>
        );
    }
}