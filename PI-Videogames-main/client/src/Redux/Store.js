import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import videoGamesReducer from './Reducer.js';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  videoGamesReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
