import * as React from "react";
import { Carousel } from "react-bootstrap"

const CAROUSEL_IMAGES = [
    {name: "Trumpet", path: "/images/trumpet.jpg"},
    {name: "Mention Me 1", path: "/images/mention-me1.jpg"},
    {name: "Band", path: "/images/band-cropped.jpg"},
    {name: "Mention Me 2", path: "/images/mention-me2.jpg"},
];

export class Home extends React.Component<{}, {}> {
    render() {
        const carouselItems = CAROUSEL_IMAGES.map((image, index) => (
            <Carousel.Item key={index}>
                <img className="carousel-image" src={image.path} alt={image.name} />
            </Carousel.Item>
        ));

        return (
            <div>
                <h1>Jimmy and the As</h1>
                <Carousel>
                    {carouselItems}
                </Carousel>
            </div>
        );
    }
}