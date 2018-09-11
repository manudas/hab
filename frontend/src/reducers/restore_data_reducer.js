import { action_restore_data } from '../actions_creators/action_creator_onload';

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
