import * as ActionTypes from './ActionTypes';

export const CommentsReducer = (state = {
    erroMessages: null,
    comments: [],
}, action) => {
    switch (action.type) { // Switch Case Default Statement
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errorMessages: null, comments: action.payload }
        case ActionTypes.COMMENT_FAILED:
            return { ...state, errorMessages: action.payload, commetns: [] }
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            return { ...state, comments: state.comments.concat(comment) }
        default:
            return state;
    }
};