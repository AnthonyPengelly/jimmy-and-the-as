import * as React from "react";
import { Col, Row } from "react-bootstrap";

export class SongList extends React.Component<{}, {}> {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <h2>Song List</h2>
                    <p>
                        We work hard to keep our set fresh, so this is an ever changing list. But this is an example
                        of the sort of variety we play. And of course we are always open to requests!
                    </p>
                </Col>
                <Col xs={12} sm={6}>
                    <ul>
                        <li>Happy - Pharrell Williams</li>
                        <li>Umbrella - Rihanna (<a href="/audio/Umbrella.mp3" download={true}>Download</a>)</li>
                        <li>Brown Eyed Girl - Van Morrison (<a href="/audio/Brown Eyed Girl.mp3" download={true}>Download</a>)</li>
                        <li>King/Desire - Years &amp; Years</li>
                        <li>Please Don't Stop the Music - Rihanna</li>
                        <li>Under the Sea - Disney</li>
                        <li>My Girl - The Temptations</li>
                        <li>Dreaming of You - The Coral</li>
                        <li>Fiesta - The Pogues</li>
                        <li>I Wanna Be Like You - Disney</li>
                        <li>10/10 - Paolo Nutini</li>
                        <li>Hold Back the River/All these things I've done - James Bay/The Killers</li>
                    </ul>
                </Col>
                <Col xs={12} sm={6}>
                    <ul>
                        <li>Take on Me - A-ha</li>
                        <li>No Diggity - Blackstreet</li>
                        <li>Toxic/Pump It - Britney Spears/The Black Eyed Peas (<a href="/audio/Toxic.mp3" download={true}>Download</a>)</li>
                        <li>Can't Hold Us - Macklemore/Ryan Lewis</li>
                        <li>Cry Me a River - Justin Timberlake</li>
                        <li>Pencil Full of Lead - Paolo Nutini</li>
                        <li>Problem - Ariana Grande (<a href="/audio/Problem.mp3" download={true}>Download</a>)</li>
                        <li>Come on Eileen - Dexys Midnight Runners</li>
                        <li>I Will Wait - Mumford &amp; Sons</li>
                        <li>Shake a Tailfeather/Twist &amp; Shout/La Bamba - The Blues Brothers/The Beatles/Los Lobos</li>
                        <li>Johnny B. Goode - Chuck Berry</li>
                    </ul>
                </Col>
            </Row>
        );
    }
}