import * as React from "react";

export interface Bio {
    name: string;
    imagePath: string;
    content: JSX.Element;
}

const bios: Bio[] = [
    {
        name: "Ant",
        imagePath: "/images/rockstock-thumbnail.jpg",
        content:
            <p>
                Ant, AKA Jimmy, is the lead singer.
            </p>
    },
    {
        name: "Mike",
        imagePath: "/images/trumpet-thumbnail.jpg",
        content:
            <p>
                Mike plays the trumpet.
            </p>
    },
    {
        name: "Robbie",
        imagePath: "/images/mention-me2-thumbnail.jpg",
        content:
            <p>
                Robbie plays the guitar.
            </p>
    },
    {
        name: "Hal",
        imagePath: "/images/mention-me1-thumbnail.jpg",
        content:
            <p>
                Hal plays the saxophone.
            </p>
    },
    {
        name: "Sion",
        imagePath: "/images/band-thumbnail.jpg",
        content:
            <p>
                Sion plays the cajon.
            </p>
    },
];

export default bios;