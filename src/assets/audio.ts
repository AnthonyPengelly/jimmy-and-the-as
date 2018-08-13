export interface AudioItem {
    url: string;
    title: string;
    artist: string;
}

const audio: AudioItem[] = [
    {
        url: "/audio/Brown Eyed Girl.mp3",
        title: "Brown Eyed Girl",
        artist: "Van Morrison"
    },
    {
        url: "/audio/Umbrella.mp3",
        title: "Umbrella",
        artist: "Rihanna"
    },
    {
        url: "/audio/Problem.mp3",
        title: "Problem",
        artist: "Ariana Grande"
    },
    {
        url: "/audio/toxic.mp3",
        title: "Toxic",
        artist: "Britney Spears"
    },
];
export default audio;
