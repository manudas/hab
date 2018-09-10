import { combineReducers } from 'redux';
import OnLoadReducer from './onload_reducer';


const rootReducer = combineReducers({
	fields: OnLoadReducer
});
