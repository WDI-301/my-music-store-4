import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchProductData } from '../../dataFetching';
import Layout from '../Layout';
import ProductDisplay from '../ProductDisplay';


const HomePage = (props) => {
  const { addToCart, shoppingCart } = props;

  const [productData, setProductData] = useState([]);


  // This is what runs after the first render:
  useEffect(() => {
      fetchProductData()
      .then(data => setProductData(data))
      .catch(error => console.log('error: ', error))
    },
    []
    )

  return (
    <Layout shoppingCart={shoppingCart}>
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {productData.map(product =>
          <Box m={4} key={product.title} width="375px" maxWidth="100%">
            <ProductDisplay product={product} addToCart={addToCart} />
          </Box>
        )}
      </Box>
    </Layout>
  )
}

export default HomePage;