import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {};

const middleware = [thunk];

const enhancers = [applyMiddleware(...middleware)];

const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

export default store;
