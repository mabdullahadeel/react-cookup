import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from 'reactstrap';

function RenderHomeCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle><h4>{item.name}</h4></CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card >
    );
}

const Home = ({ dish, promotion, leaders }) => {
    return (
        <div className="container">
            <div className="row align-item-start">
                <div className="col-12 col-md m-1">
                    <RenderHomeCard item={dish} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderHomeCard item={promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderHomeCard item={leaders} />
                </div>
            </div>
        </div>
    )
};
export default Home;