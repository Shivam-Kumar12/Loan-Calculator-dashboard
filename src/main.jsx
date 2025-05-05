import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProviderCustom } from './context/ThemeContext';
import { LoanProvider } from './context/LoanContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Only here */}
      <ThemeProviderCustom>
        <LoanProvider>
          <App />
        </LoanProvider>
      </ThemeProviderCustom>
    </BrowserRouter>
  </React.StrictMode>
);
