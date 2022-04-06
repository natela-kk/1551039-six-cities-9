import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Favorites} from '../../types/state';

const initialState: Favorites = {
  favorites: [],
};

export const favorites = createSlice({
  name: NameSpace.favorites,
  initialState,
  reducers: {
    loadFavoritesAction: (state, action) => {
      state.favorites = action.payload;
    },
    markFavoriteAction: (state, action) => {
      state.favorites = action.payload;
    },
  }});

export const {loadFavoritesAction, markFavoriteAction} = favorites.actions;
