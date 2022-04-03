import {createReducer} from '@reduxjs/toolkit';
import {changeCityAction, changeSortTypeAction, loadOffersAction, loadPropertyAction, requireAuthorization, loadNearbyAction, addCommentAction, loadCommentsAction} from './action';
import { AuthorizationStatus, CITIES, SORT_TYPE } from '../const';
import { City, Offer } from '../types/offer';

type initialStateType = {
  city: City,
  offers: [],
  property: Offer | null,
  nearby: [],
  comments: [],
  sortType: string,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
};

const initialState: initialStateType = {
  city: CITIES[0],
  offers: [],
  property: null,
  nearby: [],
  comments: [],
  sortType: SORT_TYPE.popular,
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
    .addCase(loadNearbyAction, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(loadCommentsAction, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(addCommentAction, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});


export default reducer;

