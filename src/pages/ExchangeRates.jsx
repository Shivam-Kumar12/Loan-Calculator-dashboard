import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';

const ExchangeRates = () => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    axios.get(`/api/v6/${import.meta.env.VITE_EXCHANGE_RATE_API_KEY}/latest/USD`)
      .then((res) => setRates(res.data.conversion_rates))
      .catch(console.error);
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Exchange Rates</Typography>
      <List>
        {Object.entries(rates).map(([currency, value]) => (
          <ListItem key={currency}>
            <ListItemText primary={`${currency}: ${value}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ExchangeRates;
