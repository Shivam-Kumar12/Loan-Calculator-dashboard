import React, { createContext, useContext, useState } from 'react';

const LoanContext = createContext();

export const LoanProvider = ({ children }) => {
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [currency, setCurrency] = useState('USD');

  // Utility to round to two decimal places
  const roundToTwo = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

  const calculateEMI = (P, R, Y) => {
    const N = Y * 12; // Total number of payments (months)
    const r = R / (12 * 100); // Monthly interest rate
    const emiCalc = (P * r * Math.pow(1 + r, N)) / (Math.pow(1 + r, N) - 1);
    const emiRounded = roundToTwo(emiCalc);
    setEmi(emiRounded);

    let balance = P;
    const result = [];

    for (let i = 1; i <= N; i++) {
      const interest = roundToTwo(balance * r);
      const principal = roundToTwo(emiRounded - interest);
      balance = roundToTwo(balance - principal);

      // Prevent negative balance due to floating point errors
      if (balance < 0) balance = 0;

      result.push({
        month: i,
        principal,
        interest,
        balance,
      });
    }

    setSchedule(result);
  };

  const resetTable = () => {
    setEmi(null);
    setSchedule([]);
  };

  return (
    <LoanContext.Provider
      value={{
        emi,
        schedule,
        calculateEMI,
        resetTable,
        currency,
        setCurrency,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
};

export const useLoanContext = () => useContext(LoanContext);
