import { Box } from '@mui/material';
import { useContext } from 'react';
import { shoppingCartContext } from '../../App';
import Layout from '../Layout';


// const sampleShoppingCart = [

//   {
//     id: '234',
//     title: "Red Drum Set",
//     price: 59999,
//     quantity: 2,
//     image: 'https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg',
//  },
//  {
//   id: '123',
//   title: "Blue Drum Set",
//   price: 59999,
//   quantity: 2,
//   image: 'https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg',
// },
// ];

const CartPage = (props) => {

  const {
    shoppingCart,
    removeFromCart,
  } = useContext(shoppingCartContext);


  // We want to display whats in the shopping cart.
  return (
    <Layout shoppingCart={shoppingCart}>
     <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {shoppingCart.map(cartItem =>
        <Box p={3}>
          <Box>
            {cartItem.title} - Qty: {cartItem.quantity} - ${cartItem.price / 100} total$: {cartItem.total/100}
          </Box>        
            <Box>
              <button onClick={() => removeFromCart(cartItem.id)} >Remove From cart</button>
            </Box>
          </Box>
        )}
     </Box>
    </Layout>
  )
}

export default CartPage;