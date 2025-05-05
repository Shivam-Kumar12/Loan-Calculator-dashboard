import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', userSelect: 'none' }}>
      <h1>About This Project</h1>
      <p>
        This dashboard was created to help users calculate loans and understand
        financial options in a simple way.
      </p>
      <p>This the Deployment link on Vercel</p>
      <a href="https://loan-calculator-dashboard.vercel.app/" target="_blank" rel="noopener noreferrer">
        https://loan-calculator-dashboard.vercel.app/
      </a>
      <p>For more information, please contact support.</p>
    </div>
  );
};

export default About;
