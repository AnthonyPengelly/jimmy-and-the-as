import * as React from "react";
import Facebook from "react-icons/fa/facebook-square";
import Twitter from "react-icons/fa/twitter-square";
import Mail from "react-icons/fa/envelope";
import Instagram from "react-icons/fa/instagram";

const ICON_SIZE = 30;

export class Contact extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>Contact</h1>
                <p>Get in touch to find out more or book us for your event!</p>
                <p><a href="mailto:jimmy-and-the-as@gmail.com">
                    <Mail size={ICON_SIZE} color="#D34836" /> Jimmy-and-the-As@gmail.com
                </a></p>
                <p><a href="https://facebook.com/jimmy-and-the-as" target="_blank">
                    <Facebook size={ICON_SIZE} color="#3B5998" /> https://facebook.com/jimmy-and-the-as
                </a></p>
                <p><a href="https://twitter.com/jimmy-and-the-as" target="_blank">
                    <Twitter size={ICON_SIZE} color="#1DA1F2" /> @jimmy-and-the-as
                </a></p>
                <p><a href="https://instagram.com/jimmy-and-the-as" target="_blank">
                    <Instagram size={ICON_SIZE} color="#000000" /> @jimmy-and-the-as
                </a></p>
                <p>We look forward to hearing from you</p>
            </div>
        );
    }
}