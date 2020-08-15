import { PROMOTIONS } from '../shared/promotions';

export const PromotionsReducer = (state = PROMOTIONS, action) => {
    switch (action.type) { // "switch identifies the type of changes to apply to the state"
        default:
            return state;
    }
};