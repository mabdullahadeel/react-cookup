import * as ActionTypes from './ActionTypes';

// importing data and passing it to the respective reducers using the middleware
import { DISHES } from '../shared/dishes';

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

// getting/fetching the dishes
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000);
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