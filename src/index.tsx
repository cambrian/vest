import './styles/index.css';
import './styles/custom.scss';

import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Google Analytics and TypeForm.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
