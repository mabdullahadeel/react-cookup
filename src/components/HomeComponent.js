import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from 'reactstrap';
import { LoadingSpinner } from './LoadingComponent'; //Loading Spinner

function RenderHomeCard({ item, isLoading, errorMessages }) {
    if (isLoading) {
        return (
            <LoadingSpinner />
        )
    }
    else if (errorMessages) {
        return (
            <h4>{errorMessages}</h4>
        )
    }
    else
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

const Home = (props) => {
    return (
        <div className="container">
            <div className="row align-item-start">
                <div className="col-12 col-md m-1">
                    <RenderHomeCard item={props.dish}
                        isLoading={props.dishesLoading}
                        errorMessages={props.dishesFetchErrorMessages}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderHomeCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderHomeCard item={props.leaders} />
                </div>
            </div>
        </div>
    )
};
export default Home;