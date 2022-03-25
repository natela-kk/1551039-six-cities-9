import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, changeSortTypeAction, loadOffersAction, loadPropertyAction, requireAuthorization, redirectToRoute} from './action';
import { AuthorizationStatus, CITIES } from '../const';

const DEFAULT_CITY = CITIES[0];
const DEFAULT_TYPE = 'Popular';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  property: {},
  sortType: DEFAULT_TYPE,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortTypeAction, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffersAction, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadPropertyAction, (state, action) => {
      state.property = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
      console.log(state.authorizationStatus);
    });
});


export default reducer;

