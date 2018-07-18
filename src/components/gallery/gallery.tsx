import * as React from "react";

export class Gallery extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <h1>Gallery</h1>
                <h2>Coming soon!</h2>
                <img className="full-size-image" src="/images/trumpet.jpg" alt="Jimmy &amp; the As" />
            </div>
        );
    }
}