import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const myApp = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(myApp, document.getElementById('root'));
serviceWorker.unregister();
