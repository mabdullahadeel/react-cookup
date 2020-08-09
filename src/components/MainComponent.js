import React, { Component } from 'react';

// importing components that has been created
import Menu from './MenuComponent';
import DishDetail from './DishDetatilComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
    };

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    };

    render() {
        return (
            <div className="App">
                <Header />
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)} />
                {this.state.selectedDish != null ? < DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> : <div></div>}
                <Footer />
            </div>
        );
    }

}

export default Main;
