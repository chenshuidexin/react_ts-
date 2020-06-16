import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import history from '@/history';
import rootReducer from './reducers';

// let store=createStore()
let store=applyMiddleware(promise,thunk,logger)(createStore)(rootReducer);
export default store;

/**
 *promise可以让我们派发promise，thunk让我们可以派发 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
