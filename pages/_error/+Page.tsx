import React from 'react';
import NotFound from '../../src/pages/NotFound';

export { Page }

function Page({ is404 }: { is404?: boolean }) {
  return <NotFound />;
}