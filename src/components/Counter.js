import { Box, Button } from '@mui/material';
import React, { useReducer, useState } from 'react';

// function Counter(props) {
//   const [count, setCount] = useState(0);

//   return (
//     <Box>
//       <Box>
//         <Button onClick={() => setCount(count - 1)} variant="contained"> - </Button>
//       </Box>
//       <Box>
//         {count}
//       </Box>
//       <Box>
//         <Button onClick={() => setCount(count + 1)} variant="contained"> + </Button>
//       </Box>
//     </Box>
//   );
// }

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
const countReducer = (state, action) => {
  if (action.type === 'increase_count') {
    return state + 1;
  }

  if (action.type === 'decrease_count') {
    return state - 1;
  }

  return state;
};

function Counter() {
  const [state, dispatch] = useReducer(countReducer, 0);

  return (
    <Box>
      <Box>
        <Button
          onClick={() => {
            dispatch({ type: 'decrease_count' });
          }}
          variant="contained"
        >
          {' '}
          -
          {' '}

        </Button>
      </Box>
      <Box>
        {state}
      </Box>
      <Box>
        <Button
          onClick={() => {
            dispatch({ type: 'increase_count' });
          }}
          variant="contained"
        >
          {' '}
          +
          {' '}

        </Button>
      </Box>
    </Box>
  );
}

export default Counter;
