import * as React from "react";

export interface Bio {
    name: string;
    imagePath: string;
    content: JSX.Element;
}

const bios: Bio[] = [
    {
        name: "Ant",
        imagePath: "/images/mansfield/ant-thumbnail.jpg",
        content:
            <p>
                Ant is the lead singer of Jimmy &amp; the As. He brings huge amounts of energy to the band,
                and is always keeping the audience on their feet. He also likes to throw in the odd harmonica solo!
                <br /><br />
                Favourite song to play with Jimmy &amp; The As: Come on Eileen
            </p>
    },
    {
        name: "Mike",
        imagePath: "/images/trumpet-thumbnail.jpg",
        content:
            <p>
                Mike plays trumpet and sings backing vocals. When he's not providing precise harmonies and soaring trumpet solos
                for Jimmy &amp; The As, his other musical passion is playing classical piano.
                <br /><br />
                Favourite song to play with Jimmy &amp; The As: Pencil Full of Lead
            </p>
    },
    {
        name: "Robbie",
        imagePath: "/images/mansfield/robbie-thumbnail.jpg",
        content:
            <p>
                Robbie is the band's guitarist. He is an expert at classical guitar, and has brought this technical skill
                into his playing with Jimmy &amp; the As. Alongside Sion, he provides a solid rhythm section, but is always ready
                to step into the limelight when called upon!
                <br /><br />
                Favourite song to play with Jimmy &amp; The As: Toxic
            </p>
    },
    {
        name: "Hal",
        imagePath: "/images/mansfield/hal-thumbnail.jpg",
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
        imagePath: "/images/mansfield/sion-thumbnail.jpg",
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