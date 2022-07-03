import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ToDoContextProvider } from "./contexts/ToDoContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoContextProvider>
      <App />
    </ToDoContextProvider>
  </React.StrictMode>
);
