import React, { Component } from 'react';

// importing components that has been created
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetatilComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

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
            leaders: LEADERS,
            promotions: PROMOTIONS,

            selectedDish: null
        };
    };

    render() {
        const HomePage = () => {
            return (
                // Only renders the dishes which are featured
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leaders={this.state.leaders.filter((theLeader) => theLeader.featured)[0]} />
            )
        }

        // When something is passed in the url, this is stored in a react object called "match" with parameter
        // named "prams"
        const DishWithId = ({ match }) => {
            return (
                // "parasInt will get the number from URL and convert it into the base 10 binart digit" 
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            )
        }

        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    {/* If we need to pass props to the componet we use following approach of Route */}
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path="/about" component={() => <About leaders={this.state.leaders} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
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
