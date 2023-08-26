import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@app/types/user';
import type { SigninResponse } from '../services/auth/type';

export interface AuthState {
  profile: User;
  token?: string | null;
}

const initialState: AuthState = {
  profile: {
    business_identity_veriied: '0',
    chat_token: '',
    created_at: '',
    creator_type: '0',
    dob: '',
    email: '',
    first_name: '',
    gender: '',
    id: '',
    identity_document: '',
    identity_type: '',
    identity_verified: '0',
    last_name: '',
    phone: '',
    profile_img: '',
    role: '0',
    status: '0',
    user_identity_verified: '0',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<SigninResponse>) => {
      state.token = action.payload.token;
      state.profile = action.payload;
    },
    logout: (state) => {
      state.profile = initialState.profile;
      state.token = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLogin, logout } = authSlice.actions;

export default authSlice.reducer;
