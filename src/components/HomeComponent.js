import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle } from 'reactstrap';
import { LoadingSpinner } from './LoadingComponent'; //Loading Spinner
import { BaseURL } from '../shared/baseURL'; // importing the main url for the backend server to fetch the dishes

import { FadeTransform, Fade, Stagger } from 'react-animation-components'; // Animation related stuff

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
            <FadeTransform in transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
                <Card>
                    <CardImg src={BaseURL + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle><h4>{item.name}</h4></CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card >
            </FadeTransform>
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
                    <RenderHomeCard item={props.promotion}
                        isLoading={props.promosLoading}
                        errorMessages={props.promosFetchErrorMessages}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderHomeCard item={props.leaders} />
                </div>
            </div>
        </div>
    )
};
export default Home;