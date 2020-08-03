import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

// importing the dish detail component as separate

// Making a component That will be responsible for the Menue Bar of the Page

class Menu extends Component {

    constructor(props) {
        super(props);

        // Checking the life-cycle of the calls by react while rendering the page
        console.log("Constructor in MenuComponent is called!");

    }

    // This function is always called by react while rendering the DOM
    componentDidMount() {
        console.log("componentDidMount called in MenuComponent!")
    }

    render() {
        console.log("render function from MenueComponent is called!");
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div >
            );
        });

        return (
            <div className="container" >
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

}
export default Menu;