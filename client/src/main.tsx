import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { Provider } from 'react-redux';
import store from './store';
// Styles
import './styles/index.css';
import './styles/app.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router/>
    </Provider>
  </React.StrictMode>,
)
