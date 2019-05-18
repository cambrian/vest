import './styles/index.css';
import './styles/custom.scss';

import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

// TODO: Google Analytics and TypeForm.
ReactDOM.render(
  // TODO: Add strict mode back (`react-bootstrap` caused problems).
  <App />,
  document.getElementById('root')
);
