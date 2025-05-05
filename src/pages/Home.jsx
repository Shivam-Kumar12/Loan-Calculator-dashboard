import { Container, Typography, Box } from '@mui/material';
import CalculatorForm from '../components/CalculatorForm';
import EMITable from '../components/EMITable.jsx';
import React from 'react';

const Home = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Loan Calculator Dashboard
        </Typography>
        <CalculatorForm />
        <EMITable />
      </Box>
    </Container>
  );
};

export default Home;
