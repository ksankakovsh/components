import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrate( // не понимаю что не так
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
