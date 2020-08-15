import { createStore, combineReducers } from 'redux';
import { DishesReducer } from './dishesReducer';
import { CommentsReducer } from './commentsReducer';
import { PromotionsReducer } from './promotionReducer';
import { LeadersReducer } from './leaderReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: DishesReducer,
            comments: CommentsReducer,
            promotions: PromotionsReducer,
            leaders: LeadersReducer,
        })
    );

    return store;
}