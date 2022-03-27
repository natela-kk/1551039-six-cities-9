import {createAsyncThunk} from '@reduxjs/toolkit';
import {loadOffersAction, requireAuthorization, loadPropertyAction, redirectToRoute} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {api, store} from './index';
import { errorHandle } from '../services/error-handle';
import { AuthData } from '../types/auth-data';
import { saveToken } from '../services/token';

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Offers);
      store.dispatch(loadOffersAction(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

///fetchPropertyAction пока не использовала, что-то пошло не так
export const fetchPropertyAction = createAsyncThunk(
  'data/fetchProperty',
  async (id) => {
    // try {
    //       console.log(`${APIRoute.Offers}/${id}`);
    const {data} = await api.get(`${APIRoute.Offers}/${id}`);
    store.dispatch(loadPropertyAction(data));
    //     } catch(error) {
    //       console.log(error);
  },
  // },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try{
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }  catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try{
      const {data: {token}} = await api.post(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    }  catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

