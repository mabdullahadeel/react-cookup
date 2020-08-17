import React, { Component } from 'react';

// importing components that has been created
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetatilComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

//Routing funtionality
import { Switch, Route, Redirect } from 'react-router-dom';

// Redux Store related stuff
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//adding the actions fuctionality on form submission
import { actions } from 'react-redux-form';
//importing the action creators
import { addComment, fetchDishes } from '../redux/ActionCreators';
// react itself calls function with the name mapSateToProps in order to load it from react-redux-store
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}; // with this, all the data from the redux-store is available in "props"
// The following functin creates a JS object using prespecified action creators and retun it
const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
});


class Main extends Component {

    // calling a react life-cycle method which is called every time the component gets mounted into the view
    componentDidMount() {
        this.props.fetchDishes();
    };

    render() {
        const HomePage = () => {
            return (
                // Only renders the dishes which are featured
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesFetchErrorMessages={this.props.dishes.errorMessages}

                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leaders={this.props.leaders.filter((theLeader) => theLeader.featured)[0]}
                />
            )
        }

        // When something is passed in the url, this is stored in a react object called "match" with parameter
        // named "prams"
        const DishWithId = ({ match }) => {
            return (
                // "parasInt will get the number from URL and convert it into the base 10 binart digit" 
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    fetchErrorMessages={this.props.dishes.errorMessages}

                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment} />
            )
        }

        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    {/* If we need to pass props to the componet we use following approach of Route */}
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route exact path="/about" component={() => <About leaders={this.props.leaders} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route path="/contact" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    {/* If URL path does not match anything */}
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }

}

// To connect the component to react store
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); // we use "withRouter for the react applications having routeing between different pages"
