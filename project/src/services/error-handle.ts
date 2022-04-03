import request from 'axios';
import {toast} from 'react-toastify';
import {ErrorType} from '../types/error';
import {AppRoute, HTTP_CODE} from '../const';
import { redirectToRoute } from '../store/action';
import { store } from '../store';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }
  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        toast.info('Убедитесь, что вы авторизованы');
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.info(response.data.error);
        store.dispatch(redirectToRoute(AppRoute.Error));
        break;
      default:
        toast.info(`Unknown error: ${response.data.error}`);
    }
  }
};
