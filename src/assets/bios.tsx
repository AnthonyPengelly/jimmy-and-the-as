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
                Ant is the lead singer of Jimmy &amp; the As. He is a software developer in North London. Ant brings huge amounts of energy
                to the band, and is always keeping the audience on their feet. He also likes to throw in the odd harmonica solo!
                <br /><br />
                Favourite song to play with Jimmy &amp; The As: Come on Eileen
            </p>
    },
    {
        name: "Mike",
        imagePath: "/images/trumpet-thumbnail.jpg",
        content:
            <p>
                Mike plays trumpet and sings backing vocals. He is a PhD student at University College London (UCL) and enjoys
                playing music in his spare time. When he's not providing precise harmonies and soaring trumpet solos for Jimmy &amp; The As,
                his other musical passion is playing classical piano. He is a member of the UCL chamber music club and performs in
                their concerts.
                <br /><br />
                Favourite song to play with Jimmy &amp; The As: Pencil Full of Lead
            </p>
    },
    {
        name: "Robbie",
        imagePath: "/images/mention-me2-thumbnail.jpg",
        content:
            <p>
                Robbie is the band's guitarist. He is an expert at classical guitar, and has brought this technical skill
                into his playing with Jimmy &amp; the As. Robbie is also a PhD student at UCL.
                <br /><br />
                Favourite song to play with Jimmy &amp; The As: Toxic
            </p>
    },
    {
        name: "Hal",
        imagePath: "/images/mention-me1-thumbnail.jpg",
        content:
            <p>
                Hal brings his unique brand of saxophone to the band. He is always ready to whip out an outrageous solo, it's
                getting him to stop which is the challenge. Both on and off-stage, Hal is always up for starting off the dancing!
                <br /><br />
                Favourite song to play with Jimmy &amp; The As: Can't Hold Us
            </p>
    },
    {
        name: "Sion",
        imagePath: "/images/band-thumbnail.jpg",
        content:
            <p>
                Sion is at the heart of the band on his cajon (drum box). Somehow managing to keep everything tight while adding
                excellent backing vocals. Apart from drums, Sion is also a very impressive trumpet player!
                <br /><br />
                Favourite song to play with Jimmy &amp; The As: Umbrella
            </p>
    },
];

export default bios;