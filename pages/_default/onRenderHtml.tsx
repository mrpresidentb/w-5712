import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { dangerouslySkipEscape, escapeInject } from 'vite-plugin-ssr/server';
import Page from './+Page';

export { onRenderHtml };

async function onRenderHtml(pageContext: any) {
  const helmetContext = {};
  
  const pageHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <Page />
    </HelmetProvider>
  );

  const { helmet } = helmetContext as any;

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${helmet ? dangerouslySkipEscape(helmet.title.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.meta.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.link.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.script.toString()) : ''}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {}
  };
}