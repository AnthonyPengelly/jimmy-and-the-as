export interface AudioItem {
    url: string;
    title: string;
    artist: string;
}

const audio: AudioItem[] = [
    {
        url: "/audio/Umbrella.mp3",
        title: "Umbrella",
        artist: "Rihanna"
    },
    {
        url: "/audio/10 out of 10.mp3",
        title: "10/10 (live)",
        artist: "Paolo Nutini"
    },
    {
        url: "/audio/Pencil full of lead.mp3",
        title: "Pencil Full of Lead (live)",
        artist: "Paolo Nutini"
    },
    {
        url: "/audio/toxic.mp3",
        title: "Toxic (live)",
        artist: "Britney Spears"
    },
    {
        url: "/audio/No diggity.mp3",
        title: "No Diggity (live)",
        artist: "Blackstreet"
    },
];
export default audio;
