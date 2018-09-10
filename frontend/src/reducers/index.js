import { combineReducers } from 'redux';
import { restore_data, action_restore_data } from '../actions_creators/action_creator_onload';

const rootReducer = combineReducers({
	action_restore_data: restore_data
});

export default rootReducer;
