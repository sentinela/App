// import * as ActionTypes from '../actions'
// import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as authReducer } from './authentication';
import { reducer as appReducer } from './app';

const rootReducer = combineReducers({
  routing,
  app: appReducer,
  auth: authReducer,
});

export default rootReducer;
