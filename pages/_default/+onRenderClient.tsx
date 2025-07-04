import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import type { OnRenderClientAsync } from 'vite-plugin-ssr/types';
import { Page } from './+Page';

export { onRenderClient };

const onRenderClient: OnRenderClientAsync = async (pageContext): Promise<void> => {
  const container = document.getElementById('root')!;
  hydrateRoot(container, <Page />);
};