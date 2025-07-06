import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import App from '../../src/App';

export default function Page() {
  return (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}