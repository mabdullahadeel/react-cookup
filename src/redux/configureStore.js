import { createStore, combineReducers, applyMiddleware } from 'redux'; //allows us to create redux-store
import { createForms } from 'react-redux-form'; // changing and creating the redux store using this
import { InitialFeedback } from './forms';
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
            // adding form functionality
            ...createForms({
                feedback: InitialFeedback
            })
        }), applyMiddleware(thunk, logger)
    );

    return store;
}