import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//imports de los componentes
import { AppRoute } from './appRpute';

ReactDOM.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
