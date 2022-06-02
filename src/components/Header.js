import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Header = () => {
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
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  )
};

export default Header;