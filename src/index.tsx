import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RestaurantContextProvider } from './containers/GlobalProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RestaurantContextProvider>
      <App />
    </RestaurantContextProvider>
  </React.StrictMode>
);

reportWebVitals();
