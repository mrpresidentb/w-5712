import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import type { OnRenderClientAsync } from 'vite-plugin-ssr/types';

export { onRenderClient }

const onRenderClient: OnRenderClientAsync = async (pageContext) => {
  const { Page, pageProps } = pageContext;
  const container = document.getElementById('root')!;
  hydrateRoot(container, <Page {...pageProps} />);
}