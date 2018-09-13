import { combineReducers } from 'redux';
import restore_data from './restore_data_reducer';
import { reducer as formReducer } from 'redux-form';

/**
 * Creates a root reducer with the
 * combination of all our reducers,
 * so as to give redux a central
 * point to dispatch all the action
 * creators received
 */
const rootReducer = combineReducers({
	fields: restore_data,
	form: formReducer
});

export default rootReducer;
