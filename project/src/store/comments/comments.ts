import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Comments} from '../../types/state';

const initialState: Comments = {
  comments: [],
};

export const comments = createSlice({
  name: NameSpace.comments,
  initialState,
  reducers: {
    loadCommentsAction: (state, action) => {
      state.comments = action.payload;
    },
    postCommentAction: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const {loadCommentsAction, postCommentAction} = comments.actions;
