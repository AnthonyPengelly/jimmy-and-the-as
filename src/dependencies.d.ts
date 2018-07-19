declare module "react-image-lightbox" {
    import * as React from "react";

    interface LightboxProps {
        mainSrc: string;
        prevSrc: string;
        nextSrc: string;
        onCloseRequest: () => void;
        onMovePrevRequest: () => void;
        onMoveNextRequest: () => void;
    }
    export default class Lightbox extends React.Component<LightboxProps, any> {}
}