import { LEADERS } from '../shared/leaders';

export const LeadersReducer = (state = LEADERS, action) => {
    switch (action.type) { // "switch identifies the type of changes to apply to the state"
        default:
            return state;
    }
};