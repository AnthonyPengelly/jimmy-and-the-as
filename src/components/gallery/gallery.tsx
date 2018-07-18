import * as React from "react";
import { Carousel } from "react-bootstrap";
import images from "../../assets/images";

export class Gallery extends React.Component<{}, {}> {
    render() {
        const carouselItems = images.filter(image => image.isInGallery).map((image, index) => (
            <Carousel.Item key={index}>
                <img className="carousel-image" src={image.path} alt={image.name} />
            </Carousel.Item>
        ));

        return (
            <div className="gallery">
                <h2>Gallery</h2>
                <Carousel interval={null}>
                    {carouselItems}
                </Carousel>
            </div>
        );
    }
}