import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction} from '../action';
import {offers} from '../mocks/offers';
import { CITIES } from '../const';

const DEFAULT_CITY = CITIES[0];

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    });
});


export default reducer;

