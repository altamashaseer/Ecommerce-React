import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/ProductContext';
import { FilterProvider } from './context/FilterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </AppProvider>
  </React.StrictMode>
);


reportWebVitals();
