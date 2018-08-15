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
                Mike plays trumpet and sings backing vocals. He is a PhD student at University College London (UCL) and enjoys
                playing music in his spare time. Apart from playing in Jimmy &amp; The As, his other musical passion is playing
                classical piano. He is a member of the UCL chamber music club and performs in their concerts.
                <br /><br />
                Favourite song to play with Jimmy &amp; The As: Pencil Full of Lead
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