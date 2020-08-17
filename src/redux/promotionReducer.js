import * as ActionTypes from './ActionTypes';

export const PromotionsReducer = (state = {
    isLoading: true,
    errorMessages: null,
    promotions: [],
}, action) => {
    switch (action.type) { // "switch identifies the type of changes to apply to the state"
        case ActionTypes.PROMOS_LOADING:
            return { ...state, isLoading: true, errorMessages: null, promotions: [] }
        case ActionTypes.PROMOS_FAILED:
            return { ...state, isLoading: false, errorMessages: action.payload, promotions: [] }
        case ActionTypes.ADD_PROMOS:
            return { ...state, isLoading: false, errorMessages: null, promotions: action.payload }
        default:
            return state;
    }
};