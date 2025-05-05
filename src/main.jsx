import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProviderCustom } from './context/ThemeContext'; // 👈 adjust the path if needed

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProviderCustom> {/* 👈 wrap the app in your ThemeContext provider */}
      <App />
    </ThemeProviderCustom>
  </React.StrictMode>
);
