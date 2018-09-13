import { action_restore_data } from '../actions_creators/action_creator_onload';

/**
 * Manipulates a piece of state to
 * deliver the recovery of the data
 * which has been taken from the cookie
 * @param {*} state 
 * @param {*} action 
 */
const restore_data = (state = [], action) => {
	switch (action.type) {
		case action_restore_data:
			return {
				...state,
				...action.payload
			}
    default:
      return state
  }
};
export default restore_data;
