import React, { useState } from 'react';
import CustomThemeProvider from './components/CustomThemeProvider';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import ShoppingCartProvider from './context/shoppingCartContext';

function App() {
  const [page, setPage] = useState('homePage');

  const getPage = () => {
    switch (page) {
      case 'cartPage':
        return <CartPage />;
      case 'signInPage':
        return <SignInPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <CustomThemeProvider>
      <ShoppingCartProvider>
        <button type="button" onClick={() => setPage('homePage')}>Home Page</button>
        <button type="button" onClick={() => setPage('cartPage')}>Cart Page</button>
        <button type="button" onClick={() => setPage('signInPage')}>Sign In Page</button>
        {getPage()}
      </ShoppingCartProvider>
    </CustomThemeProvider>
  );
}

export default App;
