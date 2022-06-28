import {
  Box, Button, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import APIaxios from '../../APIaxios';
import Layout from '../Layout';

const publishProductFormInitialState = {
  title: '',
  description: '',
  brand: '',
  price: '',
  image: '',
};

function PublishProductPage() {
  const [form, setForm] = useState(publishProductFormInitialState);

  const onSubmit = () => {
    // use axios to make the network requestAnimationFrame;
    APIaxios.post('/add-product', {
      productData: { ...form, price: Number(form.price) },
    })
      .then(setForm(publishProductFormInitialState))
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box p={4}>
          <Typography variant="h5" fontWeight="bold">Publish product</Typography>
        </Box>
        <Box mt={2} width={400}>
          <Box py={2}>
            <TextField
              fullWidth
              id="title"
              label="title"
              variant="standard"
              value={form.title}
              onChange={(event) => {
                setForm({ ...form, title: event.target.value });
              }}
            />
          </Box>
          <Box py={2}>
            <TextField
              fullWidth
              id="description"
              label="description"
              variant="standard"
              value={form.description}
              onChange={(event) => {
                setForm({ ...form, description: event.target.value });
              }}
            />
          </Box>
          <Box py={2}>
            <TextField
              fullWidth
              id="brand"
              label="brand"
              variant="standard"
              value={form.brand}
              onChange={(event) => {
                setForm({ ...form, brand: event.target.value });
              }}
            />
          </Box>
          <Box py={2}>
            <TextField
              fullWidth
              id="price"
              label="price"
              variant="standard"
              type="number"
              value={form.price}
              onChange={(event) => {
                setForm({ ...form, price: event.target.value });
              }}
            />
          </Box>
          <Box py={2}>
            <TextField
              fullWidth
              id="image"
              label="image"
              variant="standard"
              value={form.image}
              onChange={(event) => {
                setForm({ ...form, image: event.target.value });
              }}
            />
          </Box>
        </Box>
        <Box mt={3}>
          <Button variant="contained" onClick={onSubmit}>Publish</Button>
        </Box>
      </Box>
    </Layout>
  );
}

export default PublishProductPage;
