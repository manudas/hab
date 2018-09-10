import { combineReducers } from 'redux';
import { restore_data, action_restore_data } from '../actions_creators/action_creator_onload';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	action_restore_data: restore_data,
	form: formReducer
});

export default rootReducer;
