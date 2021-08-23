import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import store from './JS/store/store'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
