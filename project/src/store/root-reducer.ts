import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { city } from './city/city';
import { comments } from './comments/comments';
import { favorites } from './favorites/favorites';
import { nearby } from './nearby/nearby';
import { offers } from './offers/offers';
import { property } from './property/property';
import { sort } from './sort/sort';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.city]: city.reducer,
  [NameSpace.comments]: comments.reducer,
  [NameSpace.nearby]: nearby.reducer,
  [NameSpace.offers]: offers.reducer,
  [NameSpace.property]: property.reducer,
  [NameSpace.sort]: sort.reducer,
  [NameSpace.favorites]: favorites.reducer,
});
