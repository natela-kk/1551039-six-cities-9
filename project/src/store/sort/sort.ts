import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, SORT_TYPE} from '../../const';
import {SortType} from '../../types/state';

const initialState: SortType = {
  sortType: SORT_TYPE.popular,
};

export const sort = createSlice({
  name: NameSpace.sort,
  initialState,
  reducers: {
    changeSortTypeAction: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const {changeSortTypeAction} = sort.actions;
