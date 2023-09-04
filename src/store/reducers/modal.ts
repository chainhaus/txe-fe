import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

export interface GlobalModalState {
  show: boolean;
  title?: string;
  content?: ReactNode;
}

const initialState: GlobalModalState = {
  show: false,
};

export const globalModalSlice = createSlice({
  name: 'globalModal',
  initialState,
  reducers: {
    openGlobalModal: (state, action: PayloadAction<GlobalModalState>) => {
      state.show = action.payload.show;
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
    closeGlobalModal: (state) => {
      state.show = false;
      state.title = undefined;
      state.content = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openGlobalModal, closeGlobalModal } = globalModalSlice.actions;

export default globalModalSlice.reducer;
