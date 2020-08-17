import { createStore, combineReducers, applyMiddleware } from 'redux'; //allows us to create redux-store
import { DishesReducer } from './dishesReducer';
import { CommentsReducer } from './commentsReducer';
import { PromotionsReducer } from './promotionReducer';
import { LeadersReducer } from './leaderReducer';

import thunk from 'redux-thunk';  // to apply middleware
import logger from 'redux-logger';  // to apply middleware

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: DishesReducer,
            comments: CommentsReducer,
            promotions: PromotionsReducer,
            leaders: LeadersReducer,
        }), applyMiddleware(thunk, logger)
    );

    return store;
}