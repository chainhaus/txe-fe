import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ConfirmState {
  show: boolean;
  onConfirm?: () => void;
}

const initialState: ConfirmState = {
  show: false,
};

export const confirmSlice = createSlice({
  name: 'confirm',
  initialState,
  reducers: {
    openConfirm: (state, action: PayloadAction<ConfirmState>) => {
      state.show = action.payload.show;
      state.onConfirm = action.payload.onConfirm;
    },
    closeConfirm: (state) => {
      state.show = false;
      state.onConfirm = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openConfirm, closeConfirm } = confirmSlice.actions;

export default confirmSlice.reducer;
