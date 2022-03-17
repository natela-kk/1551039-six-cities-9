import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, changeSortTypeAction} from '../action';
import {offers} from '../mocks/offers';
import { CITIES } from '../const';

const DEFAULT_CITY = CITIES[0];
const DEFAULT_TYPE = 'Popular';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
  sortType: DEFAULT_TYPE,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortTypeAction, (state, action) => {
      state.sortType = action.payload;
    });
});


export default reducer;

