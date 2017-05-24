import { combineReducers } from 'redux';

import salesReducer from './pansionat.reducer';

const reducers = combineReducers({
    salesReducer: salesReducer
});

export default reducers;