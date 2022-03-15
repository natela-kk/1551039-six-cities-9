import { createAction } from '@reduxjs/toolkit';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  CREATE_OFFER_LIST: 'CREATE_OFFER_LIST',
};

export const changeCityAction = createAction(Action.CHANGE_CITY, (city) => ({
  payload: city  }));

export const createOfferListAction = createAction(Action.CREATE_OFFER_LIST);
