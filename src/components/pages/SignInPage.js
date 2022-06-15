import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logInUserRequest } from '../../dataFetching';
import Layout from '../Layout';

function SignInPage() {
  // const { user, signIn, signOut } = useUser();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    logInUserRequest()
      .then((response) => {
        // Put the resulting user data in react context over the entire application
        // That it can be accessed from any component in the component tree.
        // signIn(response.data);
        dispatch({ type: 'LOG_IN', payload: { user: response.data } });
      });
  };

  const handleSignOut = () => {
    // lougout the user
    logInUserRequest()
      .then((response) => {
        console.log('user sign out response: ', response);
        // Remove the user data from the user context when a user logs out
        // signOut();
        dispatch({ type: 'LOG_OUT' });
      });
  };

  if (user) {
    return (
      <Layout>
        <Box p={4}>
          <h1>
            Hi
            {' '}
            {user.firstName}
            {' '}
          </h1>
          <Button variant="contained" onClick={handleSignOut}>Sign out</Button>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box p={4}>
        <h1>Sign in</h1>
        <Box mb={3}>
          <TextField
            id="email"
            label="Email"
            variant="standard"
            value={signInForm.email}
            onChange={(event) => {
              setSignInForm({ ...signInForm, email: event.target.value });
            }}
          />
        </Box>
        <Box mb={3}>
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="standard"
            value={signInForm.password}
            onChange={(event) => {
              setSignInForm({ ...signInForm, password: event.target.value });
            }}
          />
        </Box>
        <Button variant="contained" onClick={onSubmit}>Sign in</Button>
      </Box>
    </Layout>
  );
}

export default SignInPage;
