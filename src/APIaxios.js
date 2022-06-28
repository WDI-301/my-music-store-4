import axios from 'axios';

const APIaxios = axios.create({
  baseURL: 'http://localhost:3017/',
  withCredentials: true,
});

export default APIaxios;
