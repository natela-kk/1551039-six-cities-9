import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { Offer } from '../../types/offer';

type InitialState = {
  favorites: Offer[],
  isFavoritesLoaded: boolean,
}

const initialState: InitialState = {
  favorites: [],
  isFavoritesLoaded: false,
};

export const favorites = createSlice({
  name: NameSpace.favorites,
  initialState,
  reducers: {
    loadFavoritesAction: (state, action) => {
      state.favorites = action.payload;
      state.isFavoritesLoaded = true;
    },
  }});

export const {loadFavoritesAction} = favorites.actions;
