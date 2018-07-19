import * as React from "react";
import { Carousel } from "react-bootstrap"
import { SocialIcons } from "./social_icons";
import images from "../../assets/images";

export class Header extends React.Component<{}, {}> {
    render() {
        const carouselItems = images.filter(image => image.isInCarousel).map((image, index) => (
            <Carousel.Item key={index}>
                <div className="carousel-image" style={{backgroundImage:`url(${image.path})`}}></div>
            </Carousel.Item>
        ));

        return (
            <div className="header">
                <div className="main-title-wrapper">
                    <h1 className="main-title">Jimmy<br />&amp;<br/>the As</h1>
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