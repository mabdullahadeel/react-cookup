import { DISHES } from '../shared/dishes';

export const DishesReducer = (state = DISHES, action) => {
    switch (action.type) { // "switch identifies the type of changes to apply to the state"
        default:
            return state;
    }
};