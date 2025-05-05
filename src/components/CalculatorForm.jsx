import { Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useLoanContext } from '../context/LoanContext.jsx';
import React from 'react';


const CalculatorForm = () => {
  const { calculateEMI } = useLoanContext();
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [term, setTerm] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateEMI(amount, rate, term);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField label="Loan Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <TextField label="Interest Rate (%)" type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
        <TextField label="Term (Years)" type="number" value={term} onChange={(e) => setTerm(e.target.value)} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button type="submit" variant="contained">Calculate</Button>
      
      </Box>
    </Box>
  );
};

export default CalculatorForm;
