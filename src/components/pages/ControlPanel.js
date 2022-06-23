import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

function ControlPanel() {
  return (
    <Layout>
      <Box>
        <Box>
          <Box p={4}>
            <Link to="/publish-product">
              <Card sx={{ width: '160px', height: '160px' }}>
                <Box height="100%" display="flex" justify="center" alignItems="center" px={2}>
                  <Typography textAlign="center">
                    Publish new products
                  </Typography>
                </Box>
              </Card>
            </Link>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default ControlPanel;
