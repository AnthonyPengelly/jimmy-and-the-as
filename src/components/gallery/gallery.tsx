import * as React from "react";
import images from "../../assets/images";
import { GalleryLightbox } from "./gallery_lightbox";

interface GalleryState {
    photoIndex: number;
    lightboxIsOpen: boolean;
}

export class Gallery extends React.Component<{}, GalleryState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            photoIndex: 0,
            lightboxIsOpen: false
        };
    }

    render() {
        const galleryImages = images.filter(image => image.isInGallery);
        const galleryImageComponents = galleryImages.map((image, index) => (
            <div className="gallery-image-wrapper" key={index}>
                <div
                    className="aspect-ratio-4-3 gallery-image"
                    onClick={() => this.openImage(index)}
                    style={{backgroundImage: `url(${image.thumbnailPath})` }}>
                </div>
            </div>
        ));

        return (
            <div className="gallery">
                <h2>Gallery</h2>
                <div className="gallery-grid">
                    {galleryImageComponents}
                </div>
                <GalleryLightbox
                    images={galleryImages}
                    selectedIndex={this.state.photoIndex}
                    isOpen={this.state.lightboxIsOpen}
                    onClose={() => this.closeLightbox()}
                />
            </div>
        );
    }

    openImage(index: number) {
        this.setState({
            photoIndex: index,
            lightboxIsOpen: true
        });
    }

    closeLightbox() {
        this.setState({
            photoIndex: 0,
            lightboxIsOpen: false
        });
    }
}