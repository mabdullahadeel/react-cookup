import React, { Component } from 'react';

// importing components that has been created
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetatilComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group'; // animation related stuff

//Routing funtionality
import { Switch, Route, Redirect } from 'react-router-dom';

// Redux Store related stuff
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//adding the actions fuctionality on form submission
import { actions } from 'react-redux-form';
//importing the action creators
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
// react itself calls function with the name mapSateToProps in order to load it from react-redux-store
const mapStateToProps = state => { // the state argument retunrs the whole redux store
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}; // with this, all the data from the redux-store is available in "props"
// The following functin creates a JS object using prespecified action creators and retun it
const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) }, //fetching the dishes
    fetchComments: () => { dispatch(fetchComments()) }, //fetching the comments
    fetchPromos: () => { dispatch(fetchPromos()) }, //fetching the promotions

    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) } // react-redux-form revisite
});


class Main extends Component {

    // calling a react life-cycle method which is called every time the component gets mounted into the view
    componentDidMount() {
        this.props.fetchDishes(); // fetching the dishes at the end of application mount
        this.props.fetchComments(); // fetching the comments at the end of application mount
        this.props.fetchPromos(); // fetching the promotions at the end of application mount
    };

    render() {
        const HomePage = () => {
            return (
                // Only renders the dishes which are featured
                <Home
                    // passing the dishes to the child component after fetching from the store
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesFetchErrorMessages={this.props.dishes.errorMessages}

                    // passing the dishes to the child component after fetching from the store
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosFetchErrorMessages={this.props.promotions.errorMessages}

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

                    // fetching the comments from the redux-store and provide it to the child components
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsFetchErrorMessages={this.props.comments.errorMessages}
                    postComment={this.props.postComment} />
            )
        }

        return (
            <div className="App">
                <Header />
                {/* Applying trasitions using react-transition-group */}
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
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
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div >
        );
    }

}

// To connect the component to react store
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); // we use "withRouter for the react applications having routeing between different pages"
