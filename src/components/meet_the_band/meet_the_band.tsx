import * as React from "react";
import { Media } from "react-bootstrap";

import bios from "../../assets/bios";

const THUMBNAIL_SIZE = 280;

export class MeetTheBand extends React.Component<{}, {}> {
    render() {
        const bioItems = bios.map((bio, index) => (
            <Media key={index}>
                <Media.Left>
                    <img src={bio.imagePath} alt={bio.name} width={THUMBNAIL_SIZE} />
                </Media.Left>
                <Media.Body>
                    <Media.Heading componentClass="h3">
                        {bio.name}
                    </Media.Heading>
                    {bio.content}
                </Media.Body>
            </Media>
        ));
        return (
            <div className="meet-the-band">
                <h2>Meet The Band</h2>
                {bioItems}
            </div>
        );
    }
}