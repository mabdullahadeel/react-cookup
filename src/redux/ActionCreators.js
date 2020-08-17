import * as ActionTypes from './ActionTypes';

// importing data and passing it to the respective reducers using the middleware
import { DISHES } from '../shared/dishes';
import { BaseURL } from '../shared/baseURL'; // to communicate with the server to get data

// Function creates an action object
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT, // defining type of every action
    payload: {      // the actual data that needs to be added
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    },
});

// Getting and Providing the dishes data from the server
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    // fetching the data from the server and supplying it to the application to render
    return fetch(BaseURL + 'dishes')
        .then(response => response.json())
        .then(dataReceive => dispatch(addDishes(dataReceive)));

    /*setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000);*/
};

// setting function to load dishes
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

// if dishes loading fails
export const dishLoadingFailed = (errorMessage) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errorMessage
});

//Add DISHES
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes,
});



// Getting (Fetching) the data from the server and provide it to the applications
export const fetchComments = () => (dispatch) => {
    // fetching the data from the server and supplying it to the application to render
    return fetch(BaseURL + 'comments')
        .then(response => response.json())
        .then(dataReceived => dispatch(addComments(dataReceived)))
};
// if dishes loading fails
export const commentsLoadingFailed = (errorMessage) => ({
    type: ActionTypes.COMMENT_FAILED,
    payload: errorMessage
});

//Add DISHES
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments,
});

// Getting and Providing the promos data from the server
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    // fetching the data from the server and supplying it to the application to render
    return fetch(BaseURL + 'promotions')
        .then(response => response.json())
        .then(dataReceive => dispatch(addPromos(dataReceive)));
};

// setting function to load dishes
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

// if dishes loading fails
export const promosLoadingFailed = (errorMessage) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errorMessage
});

//Add DISHES
export const addPromos = (dishes) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: dishes,
});