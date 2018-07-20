export interface Image {
    name: string;
    path: string;
    thumbnailPath: string;
    isInCarousel: boolean;
    isInGallery: boolean;
}

const images: Image[] = [
    {
        name: "Trumpet",
        path: "/images/trumpet.jpg",
        thumbnailPath: "/images/trumpet-thumbnail.jpg",
        isInCarousel: true,
        isInGallery: true
    },
    {
        name: "Mention Me Summer Party",
        path: "/images/mention-me1.jpg",
        thumbnailPath: "/images/mention-me1-thumbnail.jpg",
        isInCarousel: true,
        isInGallery: true
    },
    {
        name: "The Band & Friends",
        path: "/images/band.jpg",
        thumbnailPath: "/images/band-thumbnail.jpg",
        isInCarousel: true,
        isInGallery: true
    },
    {
        name: "The Band at Mention Me Summer Party",
        path: "/images/mention-me2.jpg",
        thumbnailPath: "/images/mention-me2-thumbnail.jpg",
        isInCarousel: true,
        isInGallery: true
    },
    {
        name: "Charity Rockstock 2018",
        path: "/images/rockstock.jpg",
        thumbnailPath: "/images/rockstock-thumbnail.jpg",
        isInCarousel: false,
        isInGallery: false
    },
    {
        name: "Jimmy & the As",
        path: "/images/logo.png",
        thumbnailPath: "/images/logo.png",
        isInCarousel: false,
        isInGallery: false
    },
];

export default images;