import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../store/reducers';

const middleware = [thunk];

const enhancers = [applyMiddleware(...middleware)];

export const storeFactory = initialState => createStore(rootReducer, initialState, ...enhancers);
