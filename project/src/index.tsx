import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import {store} from './store/index';
import {fetchOfferAction} from './store/api-actions';

store.dispatch(fetchOfferAction());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'));
