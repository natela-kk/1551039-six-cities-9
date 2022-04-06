import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { City, Offer } from './offer';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type SelectedCity = {
  city: City
};

export type SortType = {
  sortType: string,
};

export type LoadOffersType = {
  offers: [],
  isDataLoaded: boolean,
};

export type Property = {
  property: Offer | null,
};

export type Nearby = {
  nearby: [],
};

export type Comments = {
  comments: [],
};

export type Favorites = {
  favorites: [],
};


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
