import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';


export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_SORT_TYPE: 'CHANGE_SORT_TYPE',
  LOAD_OFFERS: 'LOAD_OFFERS',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  LOAD_PROPERTY: 'LOAD_PROPERTY',
  SET_ERROR: 'SET_ERROR',
};

export const changeCityAction = createAction(Action.CHANGE_CITY, (city) => ({
  payload: city  }));

export const changeSortTypeAction = createAction(Action.CHANGE_SORT_TYPE, (sortType) => ({
  payload: sortType  }));

export const loadOffersAction = createAction(Action.LOAD_OFFERS, (offers) => ({
  payload: offers }));

export const requireAuthorization = createAction<AuthorizationStatus>(Action.REQUIRE_AUTHORIZATION);

export const loadPropertyAction = createAction(Action.LOAD_PROPERTY, (property) => ({
  payload: property }));

export const setError = createAction<string>(Action.SET_ERROR);

