import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomThemeProvider from './components/CustomThemeProvider';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import ShoppingCartProvider from './context/shoppingCartContext';
import UserProvider from './context/userContext';

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <UserProvider>
          <ShoppingCartProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/user" element={<SignInPage />} />
            </Routes>
          </ShoppingCartProvider>
        </UserProvider>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;
