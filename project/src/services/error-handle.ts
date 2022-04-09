import request from 'axios';
import {toast} from 'react-toastify';
import {ErrorType} from '../types/error';
import {AppRoute, HTTPCode } from '../const';
import { redirectToRoute } from '../store/action';
import { store } from '../store';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }
  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTPCode.BadRequest :
        toast.info(response.data.error);
        break;
      case HTTPCode.Unauthorized :
        toast.info('Make sure you\'re logged in');
        break;
      case HTTPCode.NotFound :
        toast.info(response.data.error);
        store.dispatch(redirectToRoute(AppRoute.Error));
        break;
      default:
        toast.info(`Unknown error: ${response.data.error}`);
    }
  } else {
    toast.info('Something went wrong');
  }
};
