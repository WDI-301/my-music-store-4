import APIaxios from './APIaxios';

const sampleUserData = {
  id: '007',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@email.com',
  favorites: ['124'], // IDs of favorite Products
};

// Call the back end and ask the server for the products.
export const fetchProductData = () => APIaxios.get('/get-products');

export const logInUserRequest = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ data: sampleUserData });
  }, 1000);
});

export const logOutUserRequest = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Sign out successfully');
  }, 1000);
});
