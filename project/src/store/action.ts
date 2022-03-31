import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';


export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_SORT_TYPE: 'CHANGE_SORT_TYPE',
  LOAD_OFFERS: 'LOAD_OFFERS',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  LOAD_PROPERTY: 'LOAD_PROPERTY',
  LOAD_NEARBY: 'LOAD_NEARBY',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  LOAD_COMMENTS: 'LOAD_COMMENTS',
  POST_COMMENT: 'POST_COMMENT',
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

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);

export const loadNearbyAction = createAction(Action.LOAD_NEARBY, (nearby) => ({
  payload: nearby }));

export const loadCommentsAction = createAction(Action.LOAD_COMMENTS, (comments) => ({
  payload: comments }));

export const addCommentAction = createAction(Action.POST_COMMENT, (comment) => ({
  payload: comment }));
