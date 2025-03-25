// ** Redux Imports
import { SLICE_NAMES } from "@/scripts/redux.constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

// Define types for the state and payloads
interface AuthState {
  accessToken: Record<string, any>;
  accessTokenJwt: string;
  userData: Record<string, any>;
  isLogin: boolean;
}

const initialState: AuthState = {
  accessToken: {},
  accessTokenJwt: "",
  userData: {},
  isLogin: false,
};

export const authSlice = createSlice({
  name: SLICE_NAMES.auth,
  initialState,
  reducers: {
    handleLogin: (
      state: AuthState,
      action: PayloadAction<Record<string, any>>
    ) => {
      state.userData = action.payload;
      state.isLogin = true;
    },
    handleToken: (state: AuthState, action: PayloadAction<string>) => {
      state.accessToken = jwtDecode(action.payload);
      state.accessTokenJwt = action.payload;
    },
  },
});

export const { handleLogin, handleToken } = authSlice.actions;

export default authSlice.reducer;
