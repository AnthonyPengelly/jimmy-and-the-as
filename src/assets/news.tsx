import * as React from "react";

export interface NewsItem {
    title: string;
    content: JSX.Element;
    imagePath: string;
    date: Date;
}

const news: NewsItem[] = [
    {
        title: "Charity Rockstock 2018",
        content: 
            <p>
                Jimmy &amp; the As will be playing at <a href="https://www.facebook.com/events/868027593368231/" target="_blank">Rockstock 2018</a>.
                Since it's called "Rockstock", perhaps we should make this our first electric gig?              
                <br /><br />
                Come along and support us alongside some fantastic bands!
            </p>
        ,
        imagePath: "/images/rockstock.jpg",
        date: new Date(2018, 10, 26)
    },
    {
        title: "Mention Me summer party",
        content: 
            <p>
                We performed our debut gig as Jimmy &amp; the As at the Mention Me summer party.
                <br /><br />
                We played two 45 minute acoustic sets starting after England's victory over Sweden in the quarter
                finals, so naturally we had to play "Three Lions"! The weather was on our side and a great day was
                had by all. The band topped it off with a night out in Guildford!
            </p>
        ,
        imagePath: "/images/mention-me1.jpg",
        date: new Date(2018, 7, 7)
    },
    {
        title: "Call us Jimmy & the As",
        content: 
            <p>
                We decided on our name! We were on our way to our first gig, so it was about time!
                <br /><br />
                Some claim that Hal made the deciding vote from our shortlist, but I like to think it was the
                taxi driver who made the final call.
            </p>
        ,
        imagePath: "/images/logo.png",
        date: new Date(2018, 7, 7)
    },
    {
        title: "The band forms!",
        content: 
            <p>
                The band got together and started putting together an acoustic set, taking inspiration for our uni
                band <a href="https://www.facebook.com/thequaysband" target="_blank">The Quays</a> where we played many a
                memorable gig.
                <br /><br />
                It's good to hear they are still going without us in Durham, but it left us with a conundrum - what do we
                call ourselves?
            </p>
        ,
        imagePath: "/images/trumpet.jpg",
        date: new Date(2018, 4, 9)
    }
];

export default news;
