import React, { Component } from 'react';

// importing components that has been created
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetatilComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';

// imorting dishes information from a separate file in the dihese folder
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { render } from '@testing-library/react';

//Routing funtionality
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leader: LEADERS,
            promotions: PROMOTIONS,

            selectedDish: null
        };
    };

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    };

    render() {
        const HomePage = () => {
            return (
                // Only renders the dishes which are featured
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leader.filter((theLeader) => theLeader.featured)[0]} />
            )
        }
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    {/* If we need to pass props to the componet we use following approach of Route */}
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
                    <Route path="/contact" component={Contact} />
                    {/* If URL path does not match anything */}
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default Main;
