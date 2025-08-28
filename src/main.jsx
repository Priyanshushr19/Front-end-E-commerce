import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'
import ShopContextProvider from './Context/ShopContext'; // ✅ Default import for provider

createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
