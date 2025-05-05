import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: 'red' }}>Something went wrong.</h1>
      <p>Please try again later or go back to the homepage.</p>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleGoHome}
        sx={{ mt: 2 }}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default ErrorPage;
