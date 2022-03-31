import {createAsyncThunk} from '@reduxjs/toolkit';
import {loadOffersAction, requireAuthorization, loadPropertyAction, redirectToRoute, loadNearbyAction, loadCommentsAction, addCommentAction} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {api, store} from './index';
import {errorHandle} from '../services/error-handle';
import {AuthData} from '../types/auth-data';
import {dropToken, saveToken} from '../services/token';
import {CommentData} from '../types/comment-data';

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

export const fetchPropertyAction = createAsyncThunk(
  'data/fetchProperty',
  async (id: number) => {
    try {
      const {data} = await api.get(`${APIRoute.Offers}/${id}`);
      store.dispatch(loadPropertyAction(data));
    } catch(error) {
      errorHandle(error);
      store.dispatch(redirectToRoute(AppRoute.Main));
    }
  },
);

export const fetchNearbyAction = createAsyncThunk(
  'data/fetchNearby',
  async (id: number) => {
    try {
      const {data} = await api.get(`${APIRoute.Offers}/${id}/nearby`);
      store.dispatch(loadNearbyAction(data));
    } catch(error) {
      errorHandle(error);
    }
  },
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


export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (id: number) => {
    try {
      const {data} = await api.get(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadCommentsAction(data));
    } catch(error) {
      errorHandle(error);
    }
  },
);

export const postCommentAction = createAsyncThunk(
  'user/comment',
  async ({id, comment, rating}: CommentData) => {
    try{
      const {data} = await api.post(`${APIRoute.Comments}/${id}`, {comment, rating});
      store.dispatch(addCommentAction(data));
    }  catch(error) {
      errorHandle(error);
    }
  },
);
