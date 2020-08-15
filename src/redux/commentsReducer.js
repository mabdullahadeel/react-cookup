import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const CommentsReducer = (state = COMMENTS, action) => {
    switch (action.type) { // Switch Case Default Statement
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();

            return state.concat(comment); // concat add an additional item at the end of the array an store it as a separate array
        default:
            return state;
    }
};