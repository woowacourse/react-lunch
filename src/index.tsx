import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import RestaurantManager from './domain/RestaurantCollector';
import { GlobalStyle } from './globalStyle';

RestaurantManager.initMockData();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <App />
  </React.StrictMode>
);
