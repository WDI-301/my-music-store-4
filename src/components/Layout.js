import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';

const Layout = (props) => {
  const { children, shoppingCart } = props;

  return (
    <Box minWidth={320}>
      <Header shoppingCart={shoppingCart} />
      <div>
        {children}
      </div>
    </Box>
  )

};

export default Layout;