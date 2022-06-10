import React, {
  createContext, useContext, useReducer,
} from 'react';

// REDUCER function/callback
// Callback that react runs every time we "DISPATCH AN ACTION".
// Needs to know how to change the state based on actions that are dispatched.

// ACTION
// is a javascript object that contains information about how the state should change.
// when they are dispatched.

// they are always a javascript object that contains a type property
// and optionally more data that might be needed to change the state
// "{ type: "ADD_TO_COUNT" }
// "{ type: "ADD_TO_COUNT", payload: {userId: '123'} }

// they almost work like an order ticket at a restaurant.
// they contained the minimum information required to change the state properly.

// DISPATCH
// Dispatching is how we tell the reducer to change the value of the state based on an action.
// we call the dispatch function with the action we'd like to dispatch.

// STATE
// the application or component state that were keeping track of.

// (state, action) => newState

const userContext = createContext();

export const useUser = () => useContext(userContext);

// ACTIONS
const LOG_IN_ACTION = 'LOG_IN';
const LOG_OUT_ACTION = 'LOG_OUT';

// is the function that handles all logic for changing the state
const userReducer = (state, action) => {
  switch (action.type) {
    case LOG_IN_ACTION:
      return action.payload.user;

    case LOG_OUT_ACTION:
      return undefined;

    default:
      return state;
  }
};

function UserProvider(props) {
  const { children } = props;

  const [user, dispatch] = useReducer(userReducer);

  const signIn = (userData) => {
    dispatch({
      type: LOG_IN_ACTION,
      payload: {
        user: userData,
      },
    });
  };

  const signOut = () => {
    dispatch({ type: LOG_OUT_ACTION });
  };

  return (
    <userContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
