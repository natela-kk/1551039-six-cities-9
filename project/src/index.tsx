import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import { Provider } from 'react-redux';
import {store} from './store/index';


ReactDOM.render(
  <Provider store={store}>
    <App offers={offers} />
  </Provider>
  ,
  document.getElementById('root'));
