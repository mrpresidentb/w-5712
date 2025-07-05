import React from 'react';
import pkg from 'react-helmet-async';
const { HelmetProvider } = pkg;
import App from '../../src/App';

export { Page };

function Page() {
  return (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}