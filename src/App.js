import React, { useState } from 'react';
import CustomThemeProvider from './components/CustomThemeProvider';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import ShoppingCartProvider from './context/shoppingCartContext';

function App() {
  const [page, setPage] = useState('homePage');

  return (
    <CustomThemeProvider>
      <ShoppingCartProvider>
        <button type="button" onClick={() => setPage('homePage')}>Home Page</button>
        <button type="button" onClick={() => setPage('cartPage')}>Cart Page</button>
        {
          page === 'homePage' ? <HomePage />
            : (
              <CartPage />
            )
          }
      </ShoppingCartProvider>
    </CustomThemeProvider>
  );
}

export default App;
