import * as ActionTypes from './ActionTypes';

export const DishesReducer = (state = {
    isLoading: true,
    errorMessages: null,
    dishes: [],
}, action) => {
    switch (action.type) { // "switch identifies the type of changes to apply to the state"
        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, errorMessages: null, dishes: [] }
        case ActionTypes.DISHES_FAILED:
            return { ...state, isLoading: false, errorMessages: action.payload }
        case ActionTypes.ADD_DISHES:
            return { ...state, isLoading: false, errorMessages: null, dishes: action.payload }
        default:
            return state;
    }
};