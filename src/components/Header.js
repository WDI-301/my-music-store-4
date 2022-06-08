import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar, Badge, Button, IconButton, Toolbar, Typography,
  Box,
} from '@mui/material';
import { shoppingCartContext } from '../context/shoppingCartContext';

function Header() {
  const { shoppingCart } = useContext(shoppingCartContext);

  const itemQuantity = shoppingCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Music Store
        </Typography>
        <Box mr={2}>
          <Button variant="contained" color="primary">Sign In</Button>
        </Box>
        <IconButton
          size="large"
          aria-label="Go to shopping cart"
          color="inherit"
        >
          <Badge badgeContent={itemQuantity} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
