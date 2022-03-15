import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import { Provider } from 'react-redux';
import {store} from './store/index';

const OFFERS_COUNT = 312;

ReactDOM.render(
  <Provider store={store}>
    <App offersCount = {OFFERS_COUNT} offers = {offers}/>
  </Provider>
  ,
  document.getElementById('root'));
