// src/hooks/useExchangeRates.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

const useExchangeRates = (base = 'USD') => {
  const [rates, setRates] = useState({});
  
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get(`/api/v6/${import.meta.env.VITE_EXCHANGE_RATE_API_KEY}/latest/${base}`);
        setRates(res.data.conversion_rates);
      } catch (err) {
        console.error("Failed to fetch exchange rates:", err);
      }
    };

    fetchRates();
  }, [base]);

  return rates;
};

export default useExchangeRates;
