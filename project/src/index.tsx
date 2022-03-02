import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';

const OFFERS_COUNT = 312;

ReactDOM.render(
  <App offersCount = {OFFERS_COUNT} offers = {offers}/>,
  document.getElementById('root'));
