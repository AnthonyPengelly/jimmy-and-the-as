import * as React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Image } from "../../assets/images";

interface LightboxProps {
    images: Image[];
    selectedIndex: number;
    isOpen: boolean;
    onClose: () => void;
}

interface LightboxState {
    photoIndex: number;
}

export class GalleryLightbox extends React.Component<LightboxProps, LightboxState> {
    constructor(props: LightboxProps) {
        super(props);

        this.state = {
            photoIndex: 0
        };
    }

    componentWillReceiveProps(props: LightboxProps) {
        this.setState({
            photoIndex: props.selectedIndex
        });
    }    

    render() {
        if (!this.props.isOpen) {
            return null;
        }
        return (
            <Lightbox
                mainSrc={this.props.images[this.state.photoIndex].path}
                nextSrc={this.props.images[(this.state.photoIndex + 1) % this.props.images.length].path}
                prevSrc={this.props.images[(this.state.photoIndex + this.props.images.length - 1) % this.props.images.length].path}
                onCloseRequest={() => this.props.onClose()}
                onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (this.state.photoIndex + this.props.images.length - 1) % this.props.images.length,
                    })
                }
                onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (this.state.photoIndex + 1) % this.props.images.length,
                    })
                }
            />
        );
    }
}