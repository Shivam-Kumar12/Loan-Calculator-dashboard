import { Table, TableBody, TableCell, MenuItem, TextField, TableContainer, TableHead, TableRow, Paper, Typography, Button, Box } from '@mui/material';
import { useLoanContext } from '../context/LoanContext.jsx';
import React from 'react';

const EMITable = () => {
  const { schedule, emi, currency, resetTable, setCurrency } = useLoanContext();
  const currencies = ['USD', 'INR', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'];

  if (!emi) return null;

  return (
    <>
      <Typography variant="h5">
        Monthly EMI:${emi.toFixed(2)}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
        <TextField
          select
          label="Currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          sx={{ width: 100 }}
        >
          {currencies.map((cur) => (
            <MenuItem key={cur} value={cur}>{cur}</MenuItem>
          ))}
        </TextField>
        <Button variant="outlined" color="secondary" onClick={resetTable}>
          Reset Table
        </Button>

      </Box>

      <Typography variant="h3" sx={{ mb: 2 }}>
        Amortization Schedule:({currency})
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>Principal</TableCell>
              <TableCell>Interest</TableCell>
              <TableCell>Remaining Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.month}</TableCell>
                <TableCell>{row.principal.toFixed(2)} {currency}</TableCell>
                <TableCell>{row.interest.toFixed(2)} {currency}</TableCell>
                <TableCell>{row.balance.toFixed(2)} {currency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EMITable;
