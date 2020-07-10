import { combineReducers } from 'redux';

import color from './color.reducer';

const createReducer = (asyncReducers) =>
  combineReducers({
    color,
    ...asyncReducers,
  });

export default createReducer;
