export interface Image {
    name: string;
    path: string;
    isInCarousel: boolean;
    isInGallery: boolean;
}

const images: Image[] = [
    {
        name: "Trumpet",
        path: "/images/trumpet.jpg",
        isInCarousel: true,
        isInGallery: true
    },
    {
        name: "Mention Me Summer Party",
        path: "/images/mention-me1.jpg",
        isInCarousel: true,
        isInGallery: true
    },
    {
        name: "The Band & Friends",
        path: "/images/band.jpg",
        isInCarousel: true,
        isInGallery: true
    },
    {
        name: "The Band at Mention Me Summer Party",
        path: "/images/mention-me2.jpg",
        isInCarousel: true,
        isInGallery: true
    },
    {
        name: "Charity Rockstock 2018",
        path: "/images/rockstock.jpg",
        isInCarousel: false,
        isInGallery: false
    },
    {
        name: "Jimmy & the As",
        path: "/images/logo.png",
        isInCarousel: false,
        isInGallery: false
    },
];

export default images;