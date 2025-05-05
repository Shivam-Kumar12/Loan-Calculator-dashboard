import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import ExchangeRates from './pages/ExchangeRates';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import NotFound from './pages/NotFound';
import React from 'react';

const App = () => {
  const location = useLocation();

  const shouldHideNavbar = location.pathname === '/error';

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<ExchangeRates />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
