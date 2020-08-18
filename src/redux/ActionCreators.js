import * as ActionTypes from './ActionTypes';

// importing data and passing it to the respective reducers using the middleware
import { DISHES } from '../shared/dishes';
import { BaseURL } from '../shared/baseURL'; // to communicate with the server to get data

// Function creates an action object
export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT, // defining type of every action
    payload: comment
});

// adding function to add newComment to the store
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    // loading the old data
    const newComment = {      // the actual data that needs to be added
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment,
        date: null,
    }
    newComment.date = new Date().toISOString() // adding the date field for new coming comment

    // returning a PSOT request to the server
    return fetch(BaseURL + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        //handling the response
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                let error = new Error('ERROR! ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            //second parameter to the 'fetch' promise function can be an error handler if the server does not respond at all
            error => {
                let errorMessage = new Error(error.message);
                throw errorMessage;
            }
        )
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('Post Comment', error.message);
            alert('OOPS! Something went wrong and your comment cannot be processed at the moment.')
        })
}

// Getting and Providing the dishes data from the server
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    // fetching the data from the server and supplying it to the application to render
    return fetch(BaseURL + 'dishes')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                let error = new Error('ERROR! ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            //second parameter to the 'fetch' promise function can be an error handler if the server does not respond at all
            error => {
                let errorMessage = new Error(error.message);
                throw errorMessage;
            }
        )
        .then(response => response.json())
        .then(dataReceive => dispatch(addDishes(dataReceive)))
        .catch(error => dispatch(dishLoadingFailed(error.message)))


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
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                let error = new Error('ERROR! ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            //second parameter to the 'fetch' promise function can be an error handler if the server does not respond at all
            error => {
                let errorMessage = new Error(error.message);
                throw errorMessage;
            }
        )
        .then(response => response.json())
        .then(dataReceived => dispatch(addComments(dataReceived)))
        .catch(error => dispatch(commentsLoadingFailed(error.message)))

};
// if comments loading fails
export const commentsLoadingFailed = (errorMessage) => ({
    type: ActionTypes.COMMENT_FAILED,
    payload: errorMessage
});

//Add comments
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments,
});

// Getting and Providing the promos data from the server
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    // fetching the data from the server and supplying it to the application to render
    return fetch(BaseURL + 'promotions').then(response => {
        if (response.ok) {
            return response;
        }
        else {
            let error = new Error('ERROR! ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        //second parameter to the 'fetch' promise function can be an error handler if the server does not respond at all
        error => {
            let errorMessage = new Error(error.message);
            throw errorMessage;
        }
    )
        .then(response => response.json())
        .then(dataReceive => dispatch(addPromos(dataReceive)))
        .catch(error => dispatch(promosLoadingFailed(error.message)))

};

// setting function to load promos
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

// if promos loading fails
export const promosLoadingFailed = (errorMessage) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errorMessage
});

//Add promos
export const addPromos = (dishes) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: dishes,
});