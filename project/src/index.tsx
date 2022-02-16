import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import CardComponent from './components/card-component/card-component';

const offers = {
  OFFERS_COUNT: 312,
};

ReactDOM.render(
  <App offersCount = {offers.OFFERS_COUNT}/>,
  document.getElementById('root'));

ReactDOM.render(
  <>
    <CardComponent />,
    <CardComponent />,
    <CardComponent />,
    <CardComponent />,
    <CardComponent />,
  </>,
  document.querySelector('.cities__places-list'));
