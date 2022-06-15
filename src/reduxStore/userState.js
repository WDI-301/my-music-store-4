import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

export const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    logIn: (state, action) => action.payload.user,
    logOut: () => null,
  },
});

// Action Creators automatically created by createSlice
export const { logIn, logOut } = userSlice.actions;

export const useUser = () => {
  const dispatch = useDispatch();

  return {
    user: useSelector((state) => state.user),
    logIn: (userData) => dispatch(logIn({ user: userData })),
    logOut: () => dispatch(logOut()),
  };
};

const userReducer = userSlice.reducer;

export default userReducer;
