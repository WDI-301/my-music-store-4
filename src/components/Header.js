import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar, Badge, Box, Button, IconButton, Toolbar, Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/shoppingCartContext';
import { useUser } from '../context/userContext';

function Header() {
  const { shoppingCart } = useShoppingCart();
  const { user } = useUser();

  const itemQuantity = shoppingCart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/">
            <Typography variant="h6" component="div">
              My Music Store
            </Typography>
          </Link>
        </Box>
        <Box mr={2}>
          {
          user
            ? `Hi ${user.firstName}!`
            : (
              <Link to="/user">
                <Button variant="contained" color="primary">Sign In</Button>
              </Link>
            )
          }
        </Box>
        <IconButton
          size="large"
          aria-label="Go to shopping cart"
          color="inherit"
        >
          <Link to="/cart">
            <Badge badgeContent={itemQuantity} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
