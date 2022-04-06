import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Nearby} from '../../types/state';

const initialState: Nearby = {
  nearby: [],
};

export const nearby = createSlice({
  name: NameSpace.nearby,
  initialState,
  reducers: {
    loadNearbyAction: (state, action) => {
      state.nearby = action.payload;
    },
  },
});

export const {loadNearbyAction} = nearby.actions;
