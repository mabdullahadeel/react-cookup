import * as ActionTypes from './ActionTypes';

// Function creates an action object
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT, // defining type of every action
    payload: {      // the actual data that needs to be added
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
})