import * as React from "react";
import { Row, Col } from "react-bootstrap";

import Facebook from "react-icons/fa/facebook-square";
import Twitter from "react-icons/fa/twitter-square";
import Mail from "react-icons/fa/envelope";
import Instagram from "react-icons/fa/instagram";

const ICON_SIZE = 30;

export class Contact extends React.Component<{}, {}> {
    render() {
        return (
            <Row>
                <Col xs={12} md={4}>
                    <h1>Contact</h1>
                    <p>Get in touch to find out more or book us for your event!</p>
                    <p><a href="mailto:jimmyandtheas@gmail.com">
                        <Mail size={ICON_SIZE} color="#D34836" /> JimmyAndTheAs@gmail.com
                    </a></p>
                    <p><a href="https://facebook.com/jimmyandtheas" target="_blank">
                        <Facebook size={ICON_SIZE} color="#3B5998" /> https://facebook.com/jimmyandtheas
                    </a></p>
                    <p><a href="https://twitter.com/jimmyandtheas" target="_blank">
                        <Twitter size={ICON_SIZE} color="#1DA1F2" /> @JimmyAndTheAs
                    </a></p>
                    <p><a href="https://instagram.com/jimmyandtheas" target="_blank">
                        <Instagram size={ICON_SIZE} color="#000000" /> @jimmyandtheas
                    </a></p>
                    <p>We look forward to hearing from you</p>
                </Col>
                <Col xs={12} md={8}>
                    <img className="full-size-image" src="/images/band.jpg" alt="Jimmy &amp; the As" />
                </Col>
            </Row>
        );
    }
}