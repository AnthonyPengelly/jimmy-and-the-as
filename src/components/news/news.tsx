import * as React from "react";
import { Row, Col, Media } from "react-bootstrap";

import news from "../../assets/news";

const THUMBNAIL_SIZE = 128;

export class News extends React.Component<{}, {}> {
    render() {
        const newsItems = news.map((newsItem, index) => (
            <Media key={index}>
                <Media.Left>
                    <img src={newsItem.imagePath} alt={newsItem.title} width={THUMBNAIL_SIZE} />
                </Media.Left>
                <Media.Body>
                    <p>{newsItem.date.format("DD/MM/YY")}</p>
                    <Media.Heading componentClass="h3">
                        {newsItem.title}
                    </Media.Heading>
                    {newsItem.content}
                </Media.Body>
            </Media>
        ));

        return (
            <div className="news">
                <Row>
                    <Col xs={12}>
                        <h2>News</h2>
                        {newsItems}
                    </Col>
                </Row>
            </div>
        );
    }
}