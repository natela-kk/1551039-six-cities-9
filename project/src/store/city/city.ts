import {createSlice} from '@reduxjs/toolkit';
import {CITIES, NameSpace} from '../../const';
import {SelectedCity} from '../../types/state';

const initialState: SelectedCity = {
  city: CITIES[0],
};

export const city = createSlice({
  name: NameSpace.city,
  initialState,
  reducers: {
    changeCityAction: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const {changeCityAction} = city.actions;
