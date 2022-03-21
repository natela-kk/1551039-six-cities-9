import {createAsyncThunk} from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';
import {loadOffersAction, requireAuthorization, loadPropertyAction} from '../action';
import {APIRoute, AuthorizationStatus} from '../const';
import {api, store} from './index';

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    const {data} = await api.get(APIRoute.Offers);
    store.dispatch(loadOffersAction(data));
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
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

