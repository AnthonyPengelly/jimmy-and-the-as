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

declare module "react-responsive-audio-player" {
    import * as React from "react";

    interface AudioItem {
        url: string;
        title: string;
        artist: string;
    }

    interface AudioPlayerProps {
        playlist: AudioItem[],
        gapLengthInSeconds: number
    }

    class AudioPlayer extends React.Component<AudioPlayerProps, any> {}
    export = AudioPlayer;
}