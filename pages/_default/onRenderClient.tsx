import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import Page from './+Page';

export { onRenderClient };

function onRenderClient(pageContext: any) {
  const container = document.getElementById('root')!;
  hydrateRoot(container, <Page />);
}