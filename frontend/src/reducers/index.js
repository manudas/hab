import { combineReducers } from 'redux';
import restore_data from './restore_data_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	fields: restore_data,
	form: formReducer
});

export default rootReducer;
