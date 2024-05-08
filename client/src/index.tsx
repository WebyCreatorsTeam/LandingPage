import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterPage from './Router/RouterPage';
import "./style/index.scss";
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const helmetContext = {};

root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <RouterPage />
    </HelmetProvider>
  </React.StrictMode>
);

