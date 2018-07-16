import * as React from "react";
import Config from "../../config";

import Facebook from "react-icons/fa/facebook-square";
import Twitter from "react-icons/fa/twitter-square";
import Instagram from "react-icons/fa/instagram";

const ICON_SIZE = 40;

export class SocialIcons extends React.Component<{}, {}> {
    render() {
        return (
            <span className="social-icons">
                <a className="icon" href={Config.facebook} target="_blank">
                    <Facebook size={ICON_SIZE} color="#3B5998" />
                </a>
                <a className="icon" href={Config.twitter} target="_blank">
                    <Twitter size={ICON_SIZE} color="#1DA1F2" />
                </a>
                <a className="icon" href={Config.instagram} target="_blank">
                    <Instagram size={ICON_SIZE} color="#000000" />
                </a>
            </span>
        );
    }
}