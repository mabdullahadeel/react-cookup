import { COMMENTS } from '../shared/comments';

export const CommentsReducer = (state = COMMENTS, action) => {
    switch (action.type) { // "switch identifies the type of changes to apply to the state"
        default:
            return state;
    }
};