import * as React from "react";
import { Carousel } from "react-bootstrap"
import { SocialIcons } from "./social_icons";

const CAROUSEL_IMAGES = [
    {name: "Trumpet", path: "/images/trumpet.jpg"},
    {name: "Mention Me 1", path: "/images/mention-me1.jpg"},
    {name: "Band", path: "/images/band.jpg"},
    {name: "Mention Me 2", path: "/images/mention-me2.jpg"},
];

export class Header extends React.Component<{}, {}> {
    render() {
        const carouselItems = CAROUSEL_IMAGES.map((image, index) => (
            <Carousel.Item key={index}>
                <div className="carousel-image" style={{backgroundImage:`url(${image.path})`}}></div>
            </Carousel.Item>
        ));

        return (
            <div className="header">
                <div className="main-title-wrapper">
                    <h1 className="main-title">Jimmy &amp; the As</h1>
                    <SocialIcons />
                </div>
                <div className="image-carousel">
                    <Carousel controls={false}>
                        {carouselItems}
                    </Carousel>
                </div>
            </div>
        );
    }
}