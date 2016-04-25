import {combineReducers} from 'redux';
import counters from './counter.js';

const rootReducer = combineReducers({
	counters
});

export default rootReducer;