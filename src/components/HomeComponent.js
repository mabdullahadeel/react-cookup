import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from 'reactstrap';

function RenderHomeCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card >
    );
}

const Home = ({ dish, promotion, leader }) => {
    return (
        <div className="container">
            <dic className="row align-item-start">
                <div className="col-12 col-md m-1">
                    <RenderHomeCard item={dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderHomeCard item={promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderHomeCard item={leader} />
                </div>
            </dic>
        </div>
    )
};
export default Home;