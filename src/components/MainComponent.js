import React, { Component } from 'react';

// importing components that has been created
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetatilComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

// imorting dishes information from a separate file in the dihese folder
import { DISHES } from '../shared/dishes';
import { render } from '@testing-library/react';

//Routing funtionality
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    };

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    };

    render() {
        const HomePage = () => {
            return (
                <Home />
            )
        }
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    {/* If we need to pass props to the componet we use following approach of Route */}
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
                    {/* If URL path does not match anything */}
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default Main;
