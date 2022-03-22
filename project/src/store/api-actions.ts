import {createAsyncThunk} from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import {loadOffersAction, requireAuthorization, loadPropertyAction, setError} from './action';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import {api, store} from './index';
import { errorHandle } from '../services/error-handle';


export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


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
  async () => {
    const params = useParams();
    const offerId = Number(params.id);
    const {data} = await api.get(`${APIRoute.Offers}/${offerId}`);
    store.dispatch(loadPropertyAction(data));
  },
);

////checkAuthAction пока не использовала
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

