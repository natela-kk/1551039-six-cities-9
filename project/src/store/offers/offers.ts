import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {LoadOffersType} from '../../types/state';

const initialState: LoadOffersType = {
  offers: [],
  isDataLoaded: false,
};

export const offers = createSlice({
  name: NameSpace.offers,
  initialState,
  reducers: {
    loadOffersAction: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    markFavoriteAction: (state, action) => {
      const updatedOfferIndex = state.offers.findIndex((offer) => offer.id === action.payload.id);
      if(updatedOfferIndex !== -1) {
        state.offers[updatedOfferIndex] = action.payload;
      }
    },
  },
});

export const {loadOffersAction, markFavoriteAction} = offers.actions;
