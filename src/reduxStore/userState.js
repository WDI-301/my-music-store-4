/* eslint-disable default-param-last */
// ACTIONS
export const LOG_IN_ACTION = 'LOG_IN';
export const LOG_OUT_ACTION = 'LOG_OUT';

// reducer takes state and action as arguments and returns the updated version of the state.
// is the function that handles all logic for changing the state

const userInitialValue = null;

const userReducer = (state = userInitialValue, action) => {
  switch (action.type) {
    case LOG_IN_ACTION:
      return action.payload.user;

    case LOG_OUT_ACTION:
      return null;

    default:
      return state;
  }
};

export default userReducer;
