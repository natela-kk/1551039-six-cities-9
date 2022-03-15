import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, createOfferListAction} from '../action';
import {offers} from '../mocks/offers';

const DEFAULT_CITY = 'Paris';

const initialState = {
  city: DEFAULT_CITY,
  offersList: offers.filter(({city}) => city.name === DEFAULT_CITY),
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(createOfferListAction, (state, action) => {
      state.offersList = offers.filter(({city}) => city.name === state.city);
    });
});


export default reducer;

