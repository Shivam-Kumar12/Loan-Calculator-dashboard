// src/context/GlobalContext.jsx
import { createContext, useContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import React from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <GlobalContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
