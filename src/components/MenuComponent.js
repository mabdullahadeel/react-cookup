import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { LoadingSpinner } from './LoadingComponent'; // Loading Spinner while the dish is loading

// Making a component That will be responsible for the Menue Bar of the Page
function RenderMenuItem({ dish }) {
    return (
        <Link to={`menu/${dish.id}`}>
            <Card >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
}

// Another way of using functional component (arrow function from ES6 JavaScript)
const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
            </div >
        );
    });
    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <LoadingSpinner />
                </div>
            </div>
        );
    }
    else if (props.dishes.fetchErrorMessages) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.fetchErrorMessages}</h4>
                </div>
            </div>
        );
    }
    else
        return (
            <div className="container" >
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>
                            Menu
                    </h3>
                        <br />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
}
export default Menu;