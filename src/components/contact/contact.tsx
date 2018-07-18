import * as React from "react";
import { Row, Col } from "react-bootstrap";
import Config from "../../config";

import Mail from "react-icons/fa/envelope";
import Phone from "react-icons/fa/phone";
import Facebook from "react-icons/fa/facebook-square";
import Twitter from "react-icons/fa/twitter-square";
import Instagram from "react-icons/fa/instagram";

const ICON_SIZE = 30;

export class Contact extends React.Component<{}, {}> {
    render() {
        return (
            <Row>
                <Col xs={12} md={4}>
                    <h2>Contact</h2>
                    <p>Get in touch to find out more or book us for your event!</p>
                    <p><a href={"mailto:" + Config.email}>
                        <Mail size={ICON_SIZE} color="#D34836" /> {Config.email}
                    </a></p>
                    <p><a href={"tel:" + Config.phone}>
                        <Phone size={ICON_SIZE} /> {Config.phone}
                    </a></p>
                    <p><a href={Config.facebook} target="_blank">
                        <Facebook size={ICON_SIZE} color="#3B5998" /> {Config.facebook}
                    </a></p>
                    <p><a href={Config.twitter} target="_blank">
                        <Twitter size={ICON_SIZE} color="#1DA1F2" /> {Config.twitterHandle}
                    </a></p>
                    <p><a href={Config.instagram} target="_blank">
                        <Instagram size={ICON_SIZE} color="#000000" /> {Config.instagramHandle}
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