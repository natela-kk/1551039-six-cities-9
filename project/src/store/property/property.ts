import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Property} from '../../types/state';

const initialState: Property = {
  property: null,
};

export const property = createSlice({
  name: NameSpace.property,
  initialState,
  reducers: {
    loadPropertyAction: (state, action) => {
      state.property = action.payload;
    },
  },
});

export const {loadPropertyAction} = property.actions;
