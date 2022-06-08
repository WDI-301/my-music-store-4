import React, { createContext, useContext, useState } from 'react';

export const shoppingCartContext = createContext();

export const useShoppingCart = () => useContext(shoppingCartContext);

// This component is gonna handle everythign that relates to the shopping cart.
// that way all we have to do is wrap our application with it.
// and that will allows to have a cleaner app.js file
function ShoppingCartProvider(props) {
  const { children } = props;

  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (product) => {
    // does this product already exist in the shopping cart?

    const productFound = shoppingCart.find((cartItem) => cartItem.id === product.id);

    // // If it does, update the quantity of the existing one
    if (productFound) {
      const newShoppingCart = shoppingCart.map((cartItem) => {
        const newQuantity = cartItem.quantity + 1;
        if (cartItem.id === productFound.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            total: newQuantity * cartItem.price,
          };
        }
        return cartItem;
      });

      return setShoppingCart(newShoppingCart);
    }

    // // If it does not add it to the end of the list
    const newShoppingCart = [...shoppingCart, {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image,
      total: product.price,
    }];

    return setShoppingCart(newShoppingCart);
  };

  const removeFromCart = (productId) => {
    const newShoppingCart = shoppingCart.filter((cartItem) => cartItem.id !== productId);
    setShoppingCart(newShoppingCart);
  };

  const emptyCart = () => setShoppingCart([]);

  return (
    <shoppingCartContext.Provider value={{ shoppingCart, addToCart, removeFromCart, emptyCart }}>
      {children}
    </shoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
