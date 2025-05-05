import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter as Router
import React from 'react';
import Home from './pages/Home';
import ExchangeRates from './pages/ExchangeRates';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router> {/* Use only one Router, BrowserRouter here */}
      <NavBar />
      <Routes> {/* Use Routes for defining routes inside the Router */}
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<ExchangeRates />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
