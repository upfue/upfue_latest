import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from './context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.Fragment>,
);
