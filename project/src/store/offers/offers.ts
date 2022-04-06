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
  },
});

export const {loadOffersAction} = offers.actions;
