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
                        <li>Perfect Strangers - Jonas Blue</li>
                        <li>Brown Eyed Girl - Van Morrison (<a href="/audio/Brown Eyed Girl.mp3" download={true}>Download</a>)</li>
                        <li>King/Desire - Years &amp; Years</li>
                        <li>Hold My Hand - Jess Glynne</li>
                        <li>Send Me On My Way - Rusted Root</li>
                        <li>Please Don't Stop the Music - Rihanna</li>
                        <li>Under the Sea - Disney</li>
                        <li>I Can't Feel My Face - The Weeknd</li>
                        <li>My Girl - The Temptations</li>
                        <li>Dreaming of You - The Coral</li>
                        <li>Fiesta - The Pogues</li>
                        <li>Don't Feel Like Dancing - Scissor Sisters</li>
                        <li>I Wanna Be Like You - Disney</li>
                        <li>It Must Be Love - Madness</li>
                        <li>10/10 - Paolo Nutini</li>
                        <li>Hold Back the River/All these things I've done - James Bay/The Killers</li>
                    </ul>
                </Col>
                <Col xs={12} sm={6}>
                    <ul>
                        <li>Take on Me - A-ha</li>
                        <li>No Diggity - Blackstreet</li>
                        <li>Candyman - Christina Aguilera</li>
                        <li>Toxic/Pump It - Britney Spears/The Black Eyed Peas (<a href="/audio/toxic.mp3" download={true}>Download</a>)</li>
                        <li>Shotgun - George Ezra</li>
                        <li>Can't Hold Us - Macklemore/Ryan Lewis</li>
                        <li>Shut Up and Dance - Walk the Moon</li>
                        <li>Cry Me a River - Justin Timberlake</li>
                        <li>500 Miles - The Proclaimers</li>
                        <li>Pencil Full of Lead - Paolo Nutini</li>
                        <li>Uptown Funk - Mark Ronson ft. Bruno Mars</li>
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
