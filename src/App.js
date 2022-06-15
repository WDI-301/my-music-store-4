/* eslint-disable default-param-last */
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomThemeProvider from './components/CustomThemeProvider';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import store from './reduxStore';

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <CustomThemeProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/user" element={<SignInPage />} />
          </Routes>
        </CustomThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
