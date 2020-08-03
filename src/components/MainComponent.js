import React, { Component } from 'react';

// importing react based components from bootstrap that are already made for reuse
import { Navbar, NavbarBrand } from 'reactstrap';

// importing components that has been created
import Menu from './MenuComponent';
import DishDetail from './DishDetatilComponent';

// imorting dishes information from a separate file in the dihese folder
import { DISHES } from '../shared/dishes';
import { render } from '@testing-library/react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
        // Checking the life-cycle of the calls by react while rendering the page
        console.log("Constructor from the MainComponent is called!");
    };

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    // This function is always called by react while rendering the DOM
    componentDidMount() {
        console.log("componentDidMount called in MainComponent!")
    }

    render() {
        // Checking the life-cycle of the calls by react while rendering the page
        console.log("render function from MainComponent is called!");
        return (
            <div className="App">
                {/* Adding the Navbar from the reactstrap based Bootstrap */}
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">My First React Application</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }

}

export default Main;
